// test-offline-queue.mjs — harness for the app-only offline score queue.
//
// Loads the EXACT script block that scripts/sync-game.sh injected into
// www/index.html (not the source file), runs it in a VM with a stubbed
// network + localStorage, and drives it the way the game does:
//   node scripts/test-offline-queue.mjs
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert';

const html = readFileSync(new URL('../www/index.html', import.meta.url), 'utf8');
const start = html.indexOf('<script>');
const end = html.indexOf('</script>', start);
assert(start >= 0 && end > start, 'no script block found in www/index.html');
const code = html.slice(start + '<script>'.length, end);
assert(code.includes('OFFLINE-SCORE-QUEUE v4'), 'injected script is not the offline queue');

const QUEUE_KEY = 'trivia-or-nada.pending-scores.v1';
const SUBMIT = 'https://savailleentertainment.com/.netlify/functions/submit-score';
const RENAME = 'https://savailleentertainment.com/.netlify/functions/update-score-name';
const BOARD = 'https://savailleentertainment.com/.netlify/functions/get-leaderboard';
const HS_KEY = 'trivia-or-nada.highscores.v1';
const PROGRESS_KEY = 'trivia-or-nada.progress.v1';
const CLIENT_ID_RE = /^[A-Za-z0-9-]{8,64}$/;

/* Mock backend implementing the deployed dedupe contract
   (cloudflare-pages functions/lib.js + migration 0002): a submit
   whose clientId already has a row returns that row with
   deduped:true and inserts nothing. Rows live in `rows`. */
function mockBackend(rows) {
  return (url, init) => {
    const body = JSON.parse(init.body);
    if (url.endsWith('submit-score')) {
      if (body.clientId) {
        const existing = rows.find((r) => r.client_id === body.clientId);
        if (existing) {
          return Promise.resolve(jsonResponse({ ok: true, id: existing.id, rank: 1, total: rows.length, deduped: true }));
        }
      }
      const row = { id: 'srv' + (rows.length + 1) + '-id', name: body.name, score: body.score, client_id: body.clientId || null };
      rows.push(row);
      return Promise.resolve(jsonResponse({ ok: true, id: row.id, rank: 1, total: rows.length }));
    }
    if (url.endsWith('update-score-name')) {
      const row = rows.find((r) => r.id === body.id);
      if (!row || row.name !== 'Player') {
        return Promise.resolve(jsonResponse({ ok: false, error: 'Score not found, already named, or too old to rename.' }, 404));
      }
      row.name = body.name;
      return Promise.resolve(jsonResponse({ ok: true, id: row.id, name: body.name }));
    }
    return Promise.resolve(jsonResponse({ ok: true }));
  };
}

const tick = (ms = 10) => new Promise((r) => setTimeout(r, ms));
async function until(fn, label, timeout = 4000) {
  const t0 = Date.now();
  while (!fn()) {
    if (Date.now() - t0 > timeout) throw new Error('timeout waiting: ' + label);
    await tick(5);
  }
}
const jsonResponse = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { 'Content-Type': 'application/json' } });
const offline = () => Promise.reject(new TypeError('fetch failed'));
const onlineOk = (url, init) => {
  if (url.endsWith('submit-score')) {
    const p = JSON.parse(init.body);
    return Promise.resolve(jsonResponse({ ok: true, id: 'row' + p.score + '-zz', rank: 3, total: 42 }));
  }
  return Promise.resolve(jsonResponse({ ok: true }));
};

function makeEnv(handler, seedEntries, seedProgress, sharedStore) {
  const store = sharedStore || new Map();
  if (!sharedStore) {
    store.set(HS_KEY, '[{"n":"Sentinel","s":1}]');
    if (seedEntries) store.set(QUEUE_KEY, JSON.stringify({ v: 1, entries: seedEntries, intents: [] }));
    if (seedProgress) store.set(PROGRESS_KEY, JSON.stringify(seedProgress));
  }
  const calls = [];
  let current = handler;
  const network = (url, init) => {
    calls.push({ url: typeof url === 'string' ? url : url.url, body: init && init.body });
    return current(url, init);
  };
  const winListeners = {}, docListeners = {}, elListeners = {}, elements = {};
  for (const id of ['lateNameBtn', 'lateName', 'playerName']) {
    elements[id] = { value: '', addEventListener(t, f) { elListeners[id + ':' + t] = f; } };
  }
  const sandbox = {};
  sandbox.window = sandbox;
  sandbox.console = console;
  sandbox.setTimeout = setTimeout;
  sandbox.clearTimeout = clearTimeout;
  sandbox.Response = Response;
  sandbox.localStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
  };
  sandbox.fetch = network;
  sandbox.addEventListener = (t, f) => { (winListeners[t] ||= []).push(f); };
  sandbox.document = {
    readyState: 'complete', visibilityState: 'visible',
    addEventListener: (t, f) => { (docListeners[t] ||= []).push(f); },
    getElementById: (id) => elements[id] || null,
  };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return {
    sandbox, store, calls, elListeners, elements,
    setHandler(fn) { current = fn; },
    queue() { const raw = store.get(QUEUE_KEY); return raw ? JSON.parse(raw) : { entries: [], intents: [] }; },
    fireOnline() { (winListeners['online'] || []).forEach((f) => f()); },
    fireEl(id, type) { const f = elListeners[id + ':' + type]; assert(f, 'no listener wired for ' + id + ':' + type); f(); },
    submitCalls() { return calls.filter((c) => c.url === SUBMIT); },
  };
}
const post = (env, url, payload) =>
  env.sandbox.fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });

let passed = 0;
function ok(name) { passed++; console.log('  PASS', name); }

/* ---- A: offline submits queue in order; coming online flushes in
        order and clears; a duplicate flush resubmits nothing.
        DELIBERATE v4 CHANGE — read before "fixing" this block back:
        no game state is installed here, so every post is a distinct
        submission OBSERVATION. v3's degraded no-state fallback
        reused the id of an identical still-queued submission, so
        the third post below (payload-identical to the first) merged
        into the first game's entry: A1 asserted 2 entries and A2 a
        [100, 200] flush. v4 removes cross-submission id reuse
        entirely — on id-uncertainty a fresh id is minted — so the
        identical third post is now a DISTINCT submission: A1
        asserts 3 entries with two different clientIds for the two
        100s, and A2 a [100, 200, 100] flush. (Changed assertions:
        A1 entry count 2 → 3 and its old "duplicate payload must not
        be queued twice" expectation is inverted for stateless
        posts; A2 flush sequence [100, 200] → [100, 200, 100]. All
        other A1 assertions — order, payload+clientId storage, entry
        mirror — are unchanged. With state present, a same-game
        repeat still shares its game's id and DOES dedupe at the
        queue: see G1/G3.) ---- */
{
  const env = makeEnv(offline);
  await tick(20); // startup kick
  const p1 = { name: 'Bruce', score: 100, mode: 'Trivia Gauntlet', pace: 'Standard', perfect: false };
  const p2 = { name: 'Bruce', score: 200, mode: 'Daily Gauntlet', pace: 'Standard', perfect: false };
  const r1 = await post(env, SUBMIT, p1);
  assert.equal(r1.status, 503, 'offline submit should get the queued response');
  assert.equal((await r1.json()).queued, true);
  await post(env, SUBMIT, p2);
  await post(env, SUBMIT, p1); // payload-identical, but stateless: a distinct observation in v4
  let q = env.queue();
  assert.equal(q.entries.length, 3, 'v4: stateless identical posts are distinct submissions — no id reuse, no merge');
  assert.deepEqual(q.entries.map((e) => JSON.parse(e.body).score), [100, 200, 100], 'queue order = submission order');
  const stored1 = JSON.parse(q.entries[0].body);
  assert.ok(CLIENT_ID_RE.test(stored1.clientId), 'queued submit carries a valid clientId');
  const { clientId: _cid, ...rest1 } = stored1;
  assert.deepEqual(rest1, p1, 'stored payload is the game payload plus the clientId, nothing else changed');
  assert.equal(q.entries[0].clientId, stored1.clientId, 'entry mirrors its payload clientId');
  const stored3 = JSON.parse(q.entries[2].body);
  assert.ok(CLIENT_ID_RE.test(stored3.clientId), 'the repeated stateless post also carries a valid clientId');
  assert.notEqual(stored3.clientId, stored1.clientId, 'v4: the identical stateless post mints a FRESH clientId — never a borrowed one');
  ok('A1 offline submits land in the queue in order; stateless identical posts are distinct (fresh ids), payload + clientId stored');

  env.calls.length = 0;
  env.setHandler(onlineOk);
  env.fireOnline();
  await until(() => env.queue().entries.length === 0, 'queue drains on reconnect');
  assert.deepEqual(env.submitCalls().map((c) => JSON.parse(c.body).score), [100, 200, 100], 'flush order = queue order');
  ok('A2 coming back online flushes in order and clears the queue');

  const before = env.calls.length;
  env.sandbox.__offlineScoreQueue.flush();
  env.fireOnline();
  await tick(60);
  assert.equal(env.calls.length, before, 'duplicate flush must not resubmit cleared entries');
  assert.equal(env.store.get(HS_KEY), '[{"n":"Sentinel","s":1}]', "the game's own localStorage keys are untouched");
  ok('A3 duplicate flush resubmits nothing; game keys untouched');

  /* A4 (new in v4): the two stateless identical posts from A1 are
     distinct submissions all the way to the server — flushed
     against the mock dedupe backend they land as TWO rows with
     two different clientIds, never one deduped row. And a single
     stateless post retried from its QUEUE ENTRY (below in G2, and
     here in miniature) reuses its entry's frozen id: a flush is
     not a new observation. */
  const rowsA = [];
  const envA = makeEnv(offline);
  await tick(20);
  const twinS = { name: 'Stateless', score: 100, mode: 'Trivia Gauntlet', pace: 'Standard', perfect: false };
  await post(envA, SUBMIT, twinS);
  await post(envA, SUBMIT, twinS);
  assert.equal(envA.queue().entries.length, 2, 'two stateless identical posts queue as two entries');
  envA.setHandler(mockBackend(rowsA));
  envA.fireOnline();
  await until(() => envA.queue().entries.length === 0, 'stateless twin flush completes');
  assert.equal(rowsA.length, 2, 'stateless identical posts flush as two rows against the dedupe backend');
  assert.notEqual(rowsA[0].client_id, rowsA[1].client_id, 'the two rows carry different clientIds');
  ok('A4 stateless identical posts are distinct submissions end-to-end: two entries, two ids, two rows');
}

/* ---- B: a non-2xx answer also queues. ---- */
{
  const env = makeEnv(() => Promise.resolve(jsonResponse({ ok: false, error: 'boom' }, 500)));
  await tick(20);
  const r = await post(env, SUBMIT, { name: 'A', score: 5, mode: 'Trivia Gauntlet', pace: 'Standard', perfect: false });
  assert.equal(r.status, 503);
  assert.equal(env.queue().entries.length, 1);
  assert.equal(env.queue().entries[0].kind, 'submit');
  ok('B non-2xx submit is queued');
}

/* ---- C: renames — queue offline, structured 404 is resolved,
        bare 404 stays queued. ---- */
{
  const env = makeEnv(offline);
  await tick(20);
  await post(env, RENAME, { id: 'row100-zz', name: 'Bruce' });
  assert.equal(env.queue().entries.length, 1);
  assert.equal(env.queue().entries[0].kind, 'rename');
  env.setHandler(onlineOk);
  env.fireOnline();
  await until(() => env.queue().entries.length === 0, 'rename flushes');
  ok('C1 offline rename queues and flushes on reconnect');

  const structured = () => Promise.resolve(jsonResponse({ ok: false, error: 'Score not found, already named, or too old to rename.' }, 404));
  const env2 = makeEnv(structured);
  await tick(20);
  const r404 = await post(env2, RENAME, { id: 'row100-zz', name: 'Bruce' });
  assert.equal(r404.status, 404, 'structured 404 is handed back to the game as resolved');
  await tick(20);
  assert.equal(env2.queue().entries.length, 0, 'structured 404 is never queued');
  ok('C2 structured 404 from update-score-name counts as resolved (dropped)');

  const bare = () => Promise.resolve(new Response('not found', { status: 404 }));
  const env3 = makeEnv(bare);
  await tick(20);
  const rb = await post(env3, RENAME, { id: 'row100-zz', name: 'Bruce' });
  assert.equal(rb.status, 503);
  assert.equal(env3.queue().entries.length, 1, 'bare 404 (endpoint missing) stays queued');
  ok('C3 bare 404 stays queued for retry');
}

/* ---- D: a rename wanted while its score is still queued offline
        is attached and sent with the row id once the submit lands. ---- */
{
  const env = makeEnv(offline);
  await tick(20);
  const state = { score: 800, mode: 'gauntlet', suddenDeath: false, challenge: false, pace: 'standard' };
  env.sandbox.state = state;
  env.sandbox.modeLabel = (m) => (m === 'gauntlet' ? 'Trivia Gauntlet' : m);
  env.sandbox.paceKey = () => 'standard';
  await post(env, SUBMIT, { name: 'Player', score: 800, mode: 'Trivia Gauntlet', pace: 'Standard', perfect: false });
  assert.equal(env.queue().entries.length, 1);
  env.sandbox.sharedRenameWanted = { game: state, name: 'Bruce' };
  env.elListeners['lateNameBtn:click'](); // our capture listener runs after the game's own handler
  await tick(30);
  assert.equal(env.queue().entries[0].renameName, 'Bruce', 'wanted rename recorded against the queued score');
  env.calls.length = 0;
  env.setHandler(onlineOk);
  env.fireOnline();
  await until(() => env.queue().entries.length === 0, 'submit + rename flush');
  assert.equal(env.calls.length, 2);
  assert.equal(env.calls[0].url, SUBMIT);
  assert.equal(env.calls[1].url, RENAME);
  assert.deepEqual(JSON.parse(env.calls[1].body), { id: 'row800-zz', name: 'Bruce' });
  assert.equal(state.sharedId, 'row800-zz', 'row id handed back to the game state');
  assert.equal(env.sandbox.sharedRenameWanted, null);
  ok('D queued score + wanted rename flush as submit-then-rename with the server row id');
}

/* ---- E: everything else passes through untouched. ---- */
{
  const env = makeEnv(onlineOk);
  await tick(20);
  const board = await env.sandbox.fetch(BOARD);
  assert.equal(board.status, 200);
  const other = await env.sandbox.fetch('https://example.com/x', { method: 'POST', body: 'hi' });
  assert.equal(other.status, 200);
  assert.equal(env.queue().entries.length, 0);
  ok('E leaderboard reads and unrelated requests pass through, nothing queued');
}

/* ---- F: retry cap — an entry that keeps failing is parked in the
        queue after MAX_ATTEMPTS, not dropped, not retried forever. ---- */
{
  const seeded = [{
    qid: 'qseed', kind: 'submit', url: SUBMIT,
    body: JSON.stringify({ name: 'A', score: 1, mode: 'Trivia Gauntlet', pace: 'Standard', perfect: false }),
    fp: 'submit|seeded', queuedAt: Date.now(), attempts: 11, parked: false,
  }];
  const env = makeEnv(offline, seeded);
  await until(() => env.queue().entries[0] && env.queue().entries[0].parked === true, 'entry parks at the cap');
  assert.equal(env.queue().entries.length, 1, 'parked entry is retained, not dropped');
  assert.equal(env.queue().entries[0].attempts, 12);
  ok('F retries are capped: entry parks at 12 attempts and is retained');
}

/* ---- G: clientId idempotency against a mock backend implementing
        the deployed dedupe contract. A submit retried with the same
        clientId returns the existing row (deduped) and inserts
        nothing; a lost response after a server-side success behaves
        the same when the queue retries it. ---- */
{
  const rows = [];
  const env = makeEnv(mockBackend(rows));
  await tick(20);
  /* DELIBERATE v3 CHANGE, retained in v4: this block used to post
     with no game state installed and expect the retry to reuse the
     id purely because the payload was identical — that was v2's
     identity-derived id, the identical-twin bug. v3/v4 key the id
     on the game's state object (the bundle's own per-game
     boundary: startGame builds a fresh state per game and endGame
     submits from it), so the harness now installs the state object
     the way the real game does, and keeps the SAME object for the
     same game's retry. (Stateless posts get fresh ids in v4 — see
     A1/A4; G2 below is the stateless case whose retry comes from
     the QUEUE ENTRY, not a new observation, so its frozen id still
     dedupes.) */
  env.sandbox.state = { name: 'Idem', score: 500, mode: 'gauntlet' };
  const game = { name: 'Idem', score: 500, mode: 'Trivia Gauntlet', pace: 'Standard', perfect: false };
  const r1 = await post(env, SUBMIT, game);
  assert.equal(r1.status, 200);
  const d1 = await r1.json();
  assert.equal(d1.ok, true); assert.ok(d1.id);
  const sent = JSON.parse(env.submitCalls()[0].body);
  assert.ok(CLIENT_ID_RE.test(sent.clientId), 'the live attempt itself carries a clientId');
  const { clientId: _drop, ...sentRest } = sent;
  assert.deepEqual(sentRest, game, 'live body = game payload + clientId only');
  assert.equal(rows.length, 1);

  // The game retries the identical finished game — same payload AND
  // the same state object, i.e. the same game: the queue reuses that
  // game's clientId and the backend dedupes.
  const r2 = await post(env, SUBMIT, game);
  const d2 = await r2.json();
  assert.equal(d2.deduped, true, 'replay with the same clientId is deduped');
  assert.equal(d2.id, d1.id, 'deduped response returns the existing row id');
  assert.equal(rows.length, 1, 'one row total');
  assert.equal(env.queue().entries.length, 0, 'a deduped 2xx never queues');
  ok('G1 same clientId submitted twice (mock backend) → one row, second deduped with same id');

  // Lost response: the first attempt succeeds server-side but the
  // client sees a network failure → the queue retries with the same
  // clientId → the backend dedupes → still one row.
  const rows2 = [];
  const backend = mockBackend(rows2);
  let dropFirst = true;
  const lossy = (url, init) => {
    const p = backend(url, init); // the server processes it either way
    if (dropFirst && url.endsWith('submit-score')) { dropFirst = false; return Promise.reject(new TypeError('response lost')); }
    return p;
  };
  const env2 = makeEnv(lossy);
  await tick(20);
  const game2 = { name: 'Lost', score: 640, mode: 'Trivia Gauntlet', pace: 'Standard', perfect: false };
  const rl = await post(env2, SUBMIT, game2);
  assert.equal(rl.status, 503, 'a lost response queues the submit');
  assert.equal(rows2.length, 1, 'the lost attempt had already landed server-side');
  assert.equal(env2.queue().entries.length, 1);
  const queuedCid = JSON.parse(env2.queue().entries[0].body).clientId;
  env2.fireOnline();
  await until(() => env2.queue().entries.length === 0, 'queued retry flushes');
  assert.equal(rows2.length, 1, 'the retry deduped — still one row');
  const retryBody = JSON.parse(env2.submitCalls().at(-1).body);
  assert.equal(retryBody.clientId, queuedCid, 'the retry reuses the persisted clientId');
  ok('G2 lost response after server-side success → queued retry dedupes, still one row');

  /* G3 (new in v4): the core lost-response scenario WITH state
     present, exercising BOTH protection layers together:
     (1) the server lands the first attempt but the response is
     lost — the submit queues under the game's minted id;
     (2) the game makes a same-session repeat attempt with the SAME
     state object (still offline) — v4 keeps that game's id, so the
     repeat is the same body and the queue does NOT grow a second
     entry (payload-fingerprint dedup on the identical body);
     (3) the queue flush, once online, resends the entry's frozen
     id — the backend dedupes against the secretly-landed row.
     Still exactly one row at every step. (The shipped game fires
     submitSharedScore exactly once per game from endGame, so step
     (2) is defence-in-depth, not a flow the game itself produces.) */
  const rows3 = [];
  const backend3 = mockBackend(rows3);
  let dropFirst3 = true;
  const lossy3 = (url, init) => {
    const p = backend3(url, init); // the server processes it either way
    if (dropFirst3 && url.endsWith('submit-score')) { dropFirst3 = false; return Promise.reject(new TypeError('response lost')); }
    return p;
  };
  const env3 = makeEnv(lossy3);
  await tick(20);
  env3.sandbox.state = { name: 'Core', score: 700, mode: 'gauntlet' }; // the game's per-game state object
  const game3 = { name: 'Core', score: 700, mode: 'Trivia Gauntlet', pace: 'Standard', perfect: false };
  const rg1 = await post(env3, SUBMIT, game3);
  assert.equal(rg1.status, 503, 'a lost response queues the submit even when it landed server-side');
  assert.equal(rows3.length, 1, 'the lost first attempt had already landed server-side');
  assert.equal(env3.queue().entries.length, 1);
  const cid3 = JSON.parse(env3.queue().entries[0].body).clientId;
  assert.ok(CLIENT_ID_RE.test(cid3));
  // (2) Same-session, same-state repeat while now fully offline:
  env3.setHandler(offline);
  const rg2 = await post(env3, SUBMIT, game3);
  assert.equal(rg2.status, 503);
  assert.equal(env3.queue().entries.length, 1, 'a same-game repeat (same state) reuses its id and does not queue a second entry');
  assert.equal(JSON.parse(env3.queue().entries[0].body).clientId, cid3, 'the queued entry still carries the game\'s original id');
  assert.equal(rows3.length, 1, 'the offline repeat never reached the server');
  // (3) Flush online: the frozen id dedupes against the landed row.
  env3.setHandler(backend3);
  env3.fireOnline();
  await until(() => env3.queue().entries.length === 0, 'core-scenario flush completes');
  assert.equal(rows3.length, 1, 'game repeat + queue flush after a lost response → still one row');
  const flushBody = JSON.parse(env3.submitCalls().at(-1).body);
  assert.equal(flushBody.clientId, cid3, 'the flush resends the entry\'s frozen clientId verbatim');
  ok('G3 lost response WITH state present: same-session repeat keeps the id, flush dedupes — one row total');
}

/* ---- H: killed-app simulation — a "Player" score queued with the
        name its game was started under flushes as submit followed
        by an automatic rename; a truly nameless game stays Player. ---- */
{
  const rows = [];
  // Fresh "process": no live game state, only the game's progress
  // save naming the player; network down.
  const env = makeEnv(offline, null, { v: 1, name: 'Bruce', mode: 'gauntlet', score: 300 });
  await tick(20);
  const progressBefore = env.store.get(PROGRESS_KEY);
  await post(env, SUBMIT, { name: 'Player', score: 800, mode: 'Trivia Gauntlet', pace: 'Standard', perfect: false });
  const q = env.queue();
  assert.equal(q.entries.length, 1);
  assert.equal(q.entries[0].persistedName, 'Bruce', 'queue entry persists the name the game was started under');
  assert.equal(env.store.get(PROGRESS_KEY), progressBefore, "the game's progress save is read, never written");

  env.calls.length = 0;
  env.setHandler(mockBackend(rows));
  env.fireOnline(); // user relaunches the app later, back online
  await until(() => env.queue().entries.length === 0, 'killed-app flush completes');
  assert.equal(env.calls.length, 2, 'submit then automatic rename');
  assert.equal(env.calls[0].url, SUBMIT);
  assert.equal(env.calls[1].url, RENAME);
  assert.deepEqual(JSON.parse(env.calls[1].body), { id: rows[0].id, name: 'Bruce' });
  assert.equal(rows[0].name, 'Bruce', 'the shared row carries the persisted name, not "Player"');
  ok('H1 killed app: queued "Player" score flushes, then auto-renames to the persisted name');

  // No name anywhere (no live state, no progress name): "Player" is
  // the correct outcome, and no rename is attempted.
  const rows2 = [];
  const env2 = makeEnv(offline);
  await tick(20);
  await post(env2, SUBMIT, { name: 'Player', score: 320, mode: 'Daily Gauntlet', pace: 'Standard', perfect: false });
  assert.equal(env2.queue().entries[0].persistedName, undefined, 'nothing to persist for a nameless game');
  env2.calls.length = 0;
  env2.setHandler(mockBackend(rows2));
  env2.fireOnline();
  await until(() => env2.queue().entries.length === 0, 'nameless flush completes');
  assert.equal(env2.calls.length, 1, 'submit only — no rename follows a nameless game');
  assert.equal(rows2[0].name, 'Player');
  ok('H2 genuinely nameless game still posts as "Player", no rename attempted');
}

/* ---- I: per-game clientIds (v3 footnote 1, v4 rule retained) — two genuinely
        distinct games with IDENTICAL identity fields, finished
        back-to-back while the first is still unacknowledged, must
        NOT share an id: the game's boundary is its state object,
        and each game gets a fresh one. And a game's own retry after
        an app restart still uses its original id (it travels in
        the queue entry the flush resends). ---- */
{
  const rows = [];
  const env = makeEnv(offline);
  await tick(20);
  const twin = { name: 'Twin', score: 640, mode: 'Trivia Gauntlet', pace: 'Standard', perfect: false };
  env.sandbox.state = { name: 'Twin', score: 640, mode: 'gauntlet' }; // game 1's state object
  await post(env, SUBMIT, twin);
  env.sandbox.state = { name: 'Twin', score: 640, mode: 'gauntlet' }; // game 2: NEW state object, identical everything else
  await post(env, SUBMIT, twin);
  const q = env.queue();
  assert.equal(q.entries.length, 2, 'identical twins queue as two separate entries');
  const cid1 = JSON.parse(q.entries[0].body).clientId;
  const cid2 = JSON.parse(q.entries[1].body).clientId;
  assert.ok(CLIENT_ID_RE.test(cid1) && CLIENT_ID_RE.test(cid2));
  assert.notEqual(cid1, cid2, 'each finished game mints its own clientId');
  env.setHandler(mockBackend(rows));
  env.fireOnline();
  await until(() => env.queue().entries.length === 0, 'twin flush completes');
  assert.equal(rows.length, 2, 'the twins flush as two rows, not one deduped row');
  assert.notEqual(rows[0].id, rows[1].id);
  assert.deepEqual(rows.map((r) => r.client_id).sort(), [cid1, cid2].sort(), 'each row carries its own game\'s id');
  ok('I1 identical-twin games get distinct clientIds and flush as two rows');

  // Restart: game 1's submit queues offline under id X. A brand-new
  // VM context over the SAME localStorage (the app relaunched) must
  // flush that entry with X unchanged — the id persists in the
  // entry, independent of any in-memory state tracking — and a new
  // game finished in the relaunched app gets a fresh id.
  const rows2 = [];
  const envA = makeEnv(offline);
  await tick(20);
  envA.sandbox.state = { name: 'Rest', score: 500, mode: 'gauntlet' };
  const gameR = { name: 'Rest', score: 500, mode: 'Trivia Gauntlet', pace: 'Standard', perfect: false };
  await post(envA, SUBMIT, gameR);
  assert.equal(envA.queue().entries.length, 1);
  const idX = JSON.parse(envA.queue().entries[0].body).clientId;
  const envB = makeEnv(mockBackend(rows2), null, null, envA.store); // "relaunch": new VM, same storage
  await until(() => envB.queue().entries.length === 0, 'relaunch flush drains the queue');
  assert.equal(rows2.length, 1);
  assert.equal(rows2[0].client_id, idX, 'the flushed retry after a restart uses the game\'s original clientId');
  envB.sandbox.state = { name: 'Rest', score: 500, mode: 'gauntlet' }; // a NEW game in the relaunched app
  await post(envB, SUBMIT, gameR);
  assert.equal(rows2.length, 2, 'a new identical game after the restart posts as its own row');
  assert.notEqual(rows2[1].client_id, idX, 'the new game minted a fresh clientId');
  ok('I2 a queued game\'s retry after a simulated restart reuses its original id; the next game gets a fresh one');
}

/* ---- J: cover-name snapshot (v3 footnote 2, unchanged in v4) — a name typed on
        the cover but never used to start a game is persisted by
        the queue's read-only observation of the #playerName field
        and backs the killed-app rename fallback, with the game's
        progress save still outranking it. ---- */
{
  // Type a name on the cover; start nothing.
  const env = makeEnv(offline);
  await tick(20); // startup kick wires the field observation
  env.elements.playerName.value = 'Bruce';
  env.fireEl('playerName', 'input');
  assert.equal(env.queue().coverName, 'Bruce', 'typing on the cover persists a snapshot in the queue store');
  assert.equal(env.elements.playerName.value, 'Bruce', 'the field itself is only read, never written by the queue');

  // Killed app: a fresh VM over the same storage — no live state,
  // no progress save — where a "Player" submit queues. Only the
  // cover snapshot can name it.
  const rows = [];
  const env2 = makeEnv(offline, null, null, env.store);
  await tick(20);
  assert.equal(env2.queue().coverName, 'Bruce', 'the snapshot survives the kill (an empty relaunched field does not erase it)');
  await post(env2, SUBMIT, { name: 'Player', score: 800, mode: 'Trivia Gauntlet', pace: 'Standard', perfect: false });
  assert.equal(env2.queue().entries[0].persistedName, 'Bruce', 'the queued entry falls back to the cover snapshot');
  env2.calls.length = 0;
  env2.setHandler(mockBackend(rows));
  env2.fireOnline();
  await until(() => env2.queue().entries.length === 0, 'cover-name flush completes');
  assert.equal(env2.calls.length, 2, 'submit then automatic rename');
  assert.equal(rows[0].name, 'Bruce', 'the shared row is renamed to the cover-typed name');
  ok('J1 cover-typed, never-started name survives a kill and renames the flushed "Player" row');

  // Emptying the field clears the snapshot; nothing is renamed.
  const env3 = makeEnv(offline);
  await tick(20);
  env3.elements.playerName.value = 'Bruce';
  env3.fireEl('playerName', 'input');
  assert.equal(env3.queue().coverName, 'Bruce');
  env3.elements.playerName.value = '';
  env3.fireEl('playerName', 'input');
  assert.equal(env3.queue().coverName, null, 'emptying the field clears the snapshot');
  const rows3 = [];
  await post(env3, SUBMIT, { name: 'Player', score: 320, mode: 'Daily Gauntlet', pace: 'Standard', perfect: false });
  assert.equal(env3.queue().entries[0].persistedName, undefined, 'no fallback name once the field is emptied');
  env3.calls.length = 0;
  env3.setHandler(mockBackend(rows3));
  env3.fireOnline();
  await until(() => env3.queue().entries.length === 0, 'cleared-name flush completes');
  assert.equal(env3.calls.length, 1, 'submit only — no rename follows an emptied field');
  assert.equal(rows3[0].name, 'Player');
  ok('J2 emptying the cover field clears the snapshot — no rename');

  // Precedence: the game's progress save (where a normally saved
  // name also lands) beats an older cover snapshot.
  const env4 = makeEnv(offline, null, { v: 1, name: 'ProgressName', mode: 'gauntlet', score: 10 });
  await tick(20);
  env4.elements.playerName.value = 'CoverName';
  env4.fireEl('playerName', 'input');
  assert.equal(env4.queue().coverName, 'CoverName');
  await post(env4, SUBMIT, { name: 'Player', score: 800, mode: 'Trivia Gauntlet', pace: 'Standard', perfect: false });
  assert.equal(env4.queue().entries[0].persistedName, 'ProgressName', 'progress-save name outranks the cover snapshot');
  ok('J3 chain precedence: progress save beats the older cover snapshot');
}

console.log(`\nAll ${passed} offline-queue harness checks passed.`);
