/* ================================================================
   Trivia or Nada — APP-ONLY offline score queue (OFFLINE-SCORE-QUEUE v4)

   This file is NOT part of the game. scripts/sync-game.sh injects it
   into the app bundle copy (www/index.html) immediately before the
   game's own script, on every sync, so the shipped game artifact is
   never modified and every future re-sync re-applies the queue.

   What it does:
   - Wraps window.fetch and watches only POSTs to the shared
     leaderboard's submit-score and update-score-name endpoints.
     Every other request (leaderboard reads, fonts, local picture
     packs, links) passes straight through, untouched.
   - Idempotency: every submit-score attempt — the first live one
     included — carries a client-generated "clientId". The v4 rule:
     an id is reused ONLY for the same game's own repeat attempts,
     recognised by the game's per-game state object (below); in
     every other case — no readable state object, an unseen state
     object, or any uncertainty at all — a FRESH random id is
     minted for that submission observation. No id is ever reused
     across submissions on a guess or a similarity match. (v2
     derived the id from the score's identity fields, so two
     genuinely distinct games with identical
     name/score/mode/pace/perfect finished inside one pending
     window shared an id and deduped into a single row; v3 keyed
     the id on the state object but kept a degraded fallback that
     reused the id of an identical submission still sitting
     unacknowledged in the queue, which could likewise merge
     identical twins if state were ever unavailable — v4 removes
     that fallback entirely: ids are per-game when state is
     visible, per-observation otherwise.)
     The backend stores the id in scores.client_id (migration
     0002_client_id.sql, partial unique index) and answers a replay
     with the existing row and { deduped:true } instead of
     inserting a duplicate, so a submit whose response was lost in
     transit dedupes server-side instead of double-posting.
     Game boundary: the game's own state object. Every startGame
     (and every resume) builds a brand-new state object, endGame
     fires submitSharedScore exactly once per finished game while
     that game's state is still installed, and the game itself
     tells games apart by state-object identity (its stale-rename
     guard compares sharedRenameWanted.game === gs). This script
     uses the same signal: at a submit attempt, same state object
     + same submission identity AND an id already minted for that
     pairing in this session = the same game (reuse its id); a
     different or unseen state object = a new game (mint a fresh
     id), even when every identity field matches. Queue retries
     never re-enter this path — a flush resends the entry's stored
     body verbatim, its id frozen in the entry — so that id
     persists across retries and app restarts inside the queue
     entry itself.
     Duplicate-post protection for a game's own retries therefore
     rests on: (1) the kept per-game id for same-session repeat
     attempts when state is visible, (2) the frozen id inside a
     queued entry, resent verbatim by every flush, and (3) the
     server dedupe that recognises either. Residual risk, stated
     plainly: a same-game duplicate could double-post ONLY if the
     game resubmitted a finished game as a brand-new observation
     indistinguishable from a new game AND its first attempt had
     secretly landed server-side. The shipped game cannot do that:
     endGame is the single submitSharedScore call site in the
     bundle and fires exactly once per finished game with that
     game's state still installed (re-verified for v4 against the
     current bundle: one definition, one call site, in endGame).
     (Until the updated backend Functions + migration are deployed,
     the live backend simply ignores the extra field and submits
     behave as they did in v1; the Netlify fallback backend has no
     dedupe and is out of scope.) Submit payloads are therefore
     stored with their clientId attached — the one deliberate
     deviation from v1's byte-for-byte storage.
   - A watched POST is attempted immediately. On a network failure
     or a non-2xx answer it is stored in a persistent on-device
     queue under the localStorage key
     "trivia-or-nada.pending-scores.v1" — a dedicated key; none of
     the game's own keys (device boards, seen store, progress,
     sound, pace, streak, its own pending-rename key) is ever
     written or modified. Sole exception: the queue READS the
     game's in-progress save ("trivia-or-nada.progress.v1") to
     learn the name a game was started under (see below); it never
     writes it.
   - The queue flushes, oldest first, on app start, on the browser
     "online" event, when the app returns to the foreground
     (visibilitychange), and when the Capacitor Network plugin (if
     one is ever installed) reports connectivity. An entry leaves
     the queue only after a 2xx answer. A rename answered with the
     backend's structured 404 (row gone, already named, or older
     than 48 hours) counts as resolved and is dropped, matching
     the game's own rule.
   - Post-game renames: the game can only rename a shared row once
     the submit response has handed it the row id, so a rename
     asked for while its score is still queued offline has no POST
     to intercept. This script therefore also listens (after the
     game's own handler) on the results screen's name-save button
     and records the wanted name against the queued score, then
     sends the rename itself as soon as that queued submit lands
     and its row id is known. A name the player saves through the
     normal flow always wins over the fallback below.
   - Killed-app name fallback: when a score that was submitted
     as "Player" is queued, the queue also persists the name that
     game was started under into the queue entry. Fallback chain,
     in order: the live game state's name, then the game's own
     mid-game progress save, then (v3) this queue's snapshot of the
     cover name field — the script observes the cover's
     <input id="playerName"> (the field startGame reads) on
     input/change and keeps its latest non-empty, non-"Player"
     value in this queue's own store; emptying the field clears
     the snapshot. The field is only ever read, never written, and
     no game key is touched, so a name typed on the cover but never
     started now survives an app kill too. A name saved through
     the game's normal late-name flow still outranks every
     fallback (it is recorded as a rename intent / lands in the
     progress save, both checked before the cover snapshot).
     If the app is then killed before the player ever saves a name
     on the results screen, the queued submit still flushes — and
     is immediately followed by a rename to the persisted name, so
     the shared row does not stay "Player". The rename rides the
     backend's existing guards (only a row still named "Player",
     within 48 hours; a just-flushed row is well inside that). If
     the game was genuinely started with no name anywhere, there
     is nothing to persist and "Player" stands — correct behaviour,
     not a bug.
   - Deduplication: an exact body — its clientId included — is
     queued at most once (exact kind + body fingerprint), a flush
     already in progress is never re-entered, and cleared entries
     are never resent. (Two submissions that merely look alike get
     different clientIds under the v4 rule above, so they are
     different bodies and both queue — that is the point.)
     Automatic
     retries per entry are capped (MAX_ATTEMPTS); an entry that
     exhausts them is parked in the queue rather than dropped, and
     is reported in the console instead of silently vanishing.
   ================================================================ */
(function () {
  "use strict";

  var QUEUE_KEY = "trivia-or-nada.pending-scores.v1";
  /* The game's own in-progress save key. READ-ONLY for this script:
     it carries the name the current/last game was started under,
     which is the killed-app rename fallback source. Never written. */
  var PROGRESS_KEY = "trivia-or-nada.progress.v1";
  /* The cover's player-name field — the input startGame reads via
     $("playerName").value. Observed (read-only) so a typed but
     never-started name can still back the killed-app fallback. */
  var COVER_NAME_FIELD_ID = "playerName";
  var SUBMIT_SUFFIX = "/.netlify/functions/submit-score";
  var RENAME_SUFFIX = "/.netlify/functions/update-score-name";
  var MAX_ATTEMPTS = 12;
  var CLIENT_ID_RE = /^[A-Za-z0-9-]{8,64}$/;

  if (typeof window === "undefined" || typeof window.fetch !== "function") return;
  var rawFetch = window.fetch.bind(window);

  /* ---------- queue storage (dedicated key only) ---------- */
  function loadStore() {
    try {
      var raw = window.localStorage.getItem(QUEUE_KEY);
      if (!raw) return { v: 1, entries: [], intents: [], coverName: null };
      var d = JSON.parse(raw);
      if (!d || !(d.entries instanceof Array)) return { v: 1, entries: [], intents: [], coverName: null };
      if (!(d.intents instanceof Array)) d.intents = [];
      /* v3: the cover-name snapshot (see snapshotCoverName). Older
         stores carry a now-unused identity-keyed clientIds map from
         v2; it is simply dropped the next time the store is saved —
         queued entries keep their ids in their own bodies. */
      if (typeof d.coverName !== "string" || !d.coverName.trim() || d.coverName.trim() === "Player") d.coverName = null;
      delete d.clientIds;
      return d;
    } catch (e) { return { v: 1, entries: [], intents: [], coverName: null }; }
  }
  function saveStore(store) {
    try { window.localStorage.setItem(QUEUE_KEY, JSON.stringify(store)); } catch (e) { /* storage full/blocked: in-session behaviour unchanged */ }
  }
  var qidCounter = 0;
  function newQid() {
    qidCounter += 1;
    return "q" + Date.now().toString(36) + "-" + qidCounter + "-" + Math.floor(Math.random() * 1e9).toString(36);
  }
  function fingerprint(kind, body) { return kind + "|" + body; }
  function parseBody(body) { try { return JSON.parse(body); } catch (e) { return null; } }

  /* ---------- clientId: per finished game when the game's state
     object is visible, per submission observation otherwise;
     never reused across submissions on uncertainty (v4) ------- */
  var clientIdCounter = 0;
  function newClientId() {
    clientIdCounter += 1;
    return "g" + Date.now().toString(36) + "-" + clientIdCounter.toString(36) + "-" +
      Math.floor(Math.random() * 4294967296).toString(36) +
      Math.floor(Math.random() * 1679616).toString(36);
  }
  /* The identity fields of a score submission. Used to recognise a
     repeat submission OF THE SAME GAME — never on its own to assign
     an id (that was v2's identical-twin bug). */
  function submissionKeyFor(bodyStr) {
    var p = parseBody(bodyStr);
    if (!p) return null;
    return JSON.stringify([p.name, p.score, p.mode, p.pace, !!p.perfect]);
  }
  /* Recent game submissions, tracked in memory by the game's state
     object: { stateRef, key, clientId }. The state object is the
     boundary the bundle actually exposes — startGame/resume build
     a fresh state per game and endGame submits once per game with
     that state still installed — so (state object, identity) pins
     exactly one finished game. Only a handful of games can be in
     flight per session, so the list is capped and oldest-first
     evicted. Ids for queued games persist in their queue entries,
     not here; this list only joins repeat attempts made by the
     game itself within a session. */
  var recentSubmitGames = [];
  var MAX_TRACKED_GAMES = 16;
  function trackedClientId(stateRef, key) {
    for (var i = 0; i < recentSubmitGames.length; i++) {
      if (recentSubmitGames[i].stateRef === stateRef && recentSubmitGames[i].key === key) {
        return recentSubmitGames[i].clientId;
      }
    }
    return null;
  }
  function trackSubmitGame(stateRef, key, clientId) {
    recentSubmitGames.push({ stateRef: stateRef, key: key, clientId: clientId });
    while (recentSubmitGames.length > MAX_TRACKED_GAMES) recentSubmitGames.shift();
  }
  /* Return the submit body with a clientId attached (v4 rule):
     the body's own valid id if it has one; else, when the game's
     state object is readable AND this exact state+submission
     pairing already minted an id in this session, that id (the
     same game's own repeat attempt); in EVERY other case — an
     unseen state object, no readable state, or any uncertainty —
     a fresh random id minted for this submission observation.
     There is deliberately no path that reuses another submission's
     id on similarity: v3's fallback of borrowing the id of an
     identical still-queued submission is gone, so identical twins
     can never be merged by an id guess. The id is attached before
     the first attempt, so even a live attempt whose response is
     lost carries the same id a queued retry will carry — the
     queue entry freezes it in its stored body and every flush
     resends it verbatim. */
  function ensureClientIdForSubmit(bodyStr) {
    var p = parseBody(bodyStr);
    if (!p) return bodyStr;
    if (typeof p.clientId === "string" && CLIENT_ID_RE.test(p.clientId)) return bodyStr;
    var key = submissionKeyFor(bodyStr);
    if (!key) return bodyStr;
    var stateRef = null;
    try { stateRef = (typeof window.state !== "undefined") ? window.state : null; } catch (e) { /* no state */ }
    var cid = null;
    if (stateRef && typeof stateRef === "object") {
      cid = trackedClientId(stateRef, key);
      if (!cid) {
        cid = newClientId();
        trackSubmitGame(stateRef, key, cid);
      }
    } else {
      cid = newClientId();
    }
    p.clientId = cid;
    return JSON.stringify(p);
  }
  function bodyWithPersistedClientId(entry) {
    var p = parseBody(entry.body);
    if (!p) return entry.body;
    if (typeof p.clientId === "string" && CLIENT_ID_RE.test(p.clientId)) return entry.body;
    if (!entry.clientId) return entry.body;
    p.clientId = entry.clientId;
    return JSON.stringify(p);
  }

  /* The name the current (or most recent) game was started under,
     for the killed-app rename fallback, in precedence order:
     1. the live game state's name;
     2. the game's own mid-game progress save (which the game's
        late-name flow also repopulates with a saved name, so a
        normally saved name outranks the cover snapshot below);
     3. this queue's snapshot of the cover name field (see
        snapshotCoverName) — the only place a name typed on the
        cover but never used to start a game survives.
     Returns null when no name exists anywhere — a nameless game
     correctly stays "Player". */
  function persistedPlayerName() {
    try {
      var st = (typeof window.state !== "undefined") ? window.state : null;
      if (st && typeof st.name === "string") {
        var n = st.name.trim();
        if (n && n !== "Player") return n.slice(0, 40);
      }
    } catch (e) { /* fall through to the progress save */ }
    try {
      var raw = window.localStorage.getItem(PROGRESS_KEY);
      if (raw) {
        var d = JSON.parse(raw);
        if (d && typeof d.name === "string") {
          var n2 = d.name.trim();
          if (n2 && n2 !== "Player") return n2.slice(0, 40);
        }
      }
    } catch (e) { /* fall through to the cover snapshot */ }
    try {
      var cs = loadStore().coverName;
      if (typeof cs === "string") {
        var n3 = cs.trim();
        if (n3 && n3 !== "Player") return n3.slice(0, 40);
      }
    } catch (e) { /* no usable name anywhere */ }
    return null;
  }

  /* ---------- cover name field observation (read-only) ---------- */
  /* Keep the queue store's coverName snapshot in step with the
     cover's name field: the latest non-empty, non-"Player" value,
     or null when the field is empty. The field is only ever read —
     never written, never altered — and only this queue's own store
     key is written. A name saved through the game's late-name flow
     is written by the game into state/progress (checked earlier in
     persistedPlayerName's chain), so it always outranks this
     snapshot; the game also writes the saved name back into this
     field programmatically, which fires no input/change event and
     therefore does not disturb the snapshot. */
  function snapshotCoverName(initial) {
    try {
      var el = document.getElementById(COVER_NAME_FIELD_ID);
      if (!el) return;
      var v = (typeof el.value === "string") ? el.value.trim() : "";
      var next = (v && v !== "Player") ? v.slice(0, 40) : null;
      /* The wire-time look (initial) only ever SETS the snapshot:
         after an app kill the relaunched cover field starts empty,
         and that emptiness must not erase the name the snapshot
         exists to carry across the kill. Clearing happens on real
         input/change events, when the user empties the field. */
      if (initial && !next) return;
      var store = loadStore();
      if ((store.coverName || null) !== next) {
        store.coverName = next;
        saveStore(store);
      }
    } catch (e) { /* observation is best-effort */ }
  }
  function wireCoverNameCapture() {
    try {
      var el = document.getElementById(COVER_NAME_FIELD_ID);
      if (el && !el.__offlineQueueWired) {
        el.__offlineQueueWired = true;
        el.addEventListener("input", function () { snapshotCoverName(false); });
        el.addEventListener("change", function () { snapshotCoverName(false); });
        snapshotCoverName(true); /* capture any restored/pre-filled value */
      }
    } catch (e) { /* best-effort */ }
  }
  function payloadMatches(body, fp) {
    var p = parseBody(body); if (!p || !fp) return false;
    return p.name === fp.name && p.score === fp.score && p.mode === fp.mode && p.pace === fp.pace;
  }

  /* In-memory links that cannot persist: the finished game's state
     object captured when its submit was intercepted, per payload
     fingerprint, so a same-session flush can hand the row id back
     to the game (state.sharedId) exactly as a live submit would. */
  var stateByFingerprint = {};

  function removeMatching(kind, body) {
    var fp = fingerprint(kind, body);
    var store = loadStore();
    var kept = store.entries.filter(function (e) { return e.fp !== fp; });
    if (kept.length !== store.entries.length) { store.entries = kept; saveStore(store); }
  }

  /* Record a wanted rename (from the results screen's late-name
     save) against the queued submit it belongs to, or as an orphan
     intent if that submit has not been queued yet. */
  function recordRenameIntent(name, fp, gameRef) {
    name = (typeof name === "string" ? name.trim() : "");
    if (!name || name === "Player") return;
    var store = loadStore();
    var i, e;
    for (i = store.entries.length - 1; i >= 0; i--) {
      e = store.entries[i];
      if (e.kind !== "submit") continue;
      if (!fp || payloadMatches(e.body, fp)) { e.renameName = name; saveStore(store); return; }
    }
    if (fp) {
      for (i = 0; i < store.intents.length; i++) {
        if (store.intents[i].name === name && sameFingerprint(store.intents[i].fp, fp)) return;
      }
      store.intents.push({ name: name, fp: fp, queuedAt: Date.now() });
      saveStore(store);
    }
    void gameRef;
  }
  function sameFingerprint(a, b) {
    return !!a && !!b && a.name === b.name && a.score === b.score && a.mode === b.mode && a.pace === b.pace;
  }
  function takeIntentFor(entry) {
    if (entry.renameName) return entry.renameName;
    var store = loadStore();
    for (var i = 0; i < store.intents.length; i++) {
      if (payloadMatches(entry.body, store.intents[i].fp)) {
        var name = store.intents[i].name;
        store.intents.splice(i, 1); saveStore(store);
        return name;
      }
    }
    return null;
  }

  function enqueue(kind, url, body) {
    var fp = fingerprint(kind, body);
    var entry = {
      qid: newQid(), kind: kind, url: url, body: body, fp: fp,
      queuedAt: Date.now(), attempts: 0, parked: false
    };
    if (kind === "submit") {
      /* takeIntentFor loads and saves the store itself, so it must
         run before this function's own load below. */
      var intent = takeIntentFor(entry);
      if (intent) entry.renameName = intent;
      var submittedPayload = parseBody(body);
      if (submittedPayload) {
        if (typeof submittedPayload.clientId === "string" && CLIENT_ID_RE.test(submittedPayload.clientId)) {
          entry.clientId = submittedPayload.clientId;
        }
        /* Killed-app fallback: a score submitted as "Player" keeps
           the name its game was started under, so a flush after an
           app kill can still rename the row (see afterQueuedSubmit). */
        if (submittedPayload.name === "Player") {
          var pn = persistedPlayerName();
          if (pn) entry.persistedName = pn;
        }
      }
    }
    var store = loadStore();
    for (var i = 0; i < store.entries.length; i++) {
      if (store.entries[i].fp === fp) return store.entries[i]; /* already queued: never duplicate */
    }
    store.entries.push(entry);
    saveStore(store);
    return entry;
  }

  /* A synthetic "not yet" answer for the game when a request has
     been queued: for submit-score the game only reads d.ok (false
     leaves its in-memory rename-wanted untouched, so a late name
     saved in this session can still be honoured); for
     update-score-name a 503 is one of the answers the game's own
     logic already treats as "keep the pending rename and retry". */
  function queuedResponse() {
    var payload = JSON.stringify({ ok: false, queued: true, error: "Queued on this device — it will be submitted when the app is back online." });
    if (typeof Response === "function") {
      try { return new Response(payload, { status: 503, headers: { "Content-Type": "application/json" } }); } catch (e) { /* fall through to the shim */ }
    }
    return {
      status: 503, ok: false,
      json: function () { return Promise.resolve(JSON.parse(payload)); },
      text: function () { return Promise.resolve(payload); }
    };
  }

  function isStructured404(res, bodyPromise) {
    return bodyPromise.then(function (d) {
      return !!(res.status === 404 && d && d.ok === false && typeof d.error === "string");
    }, function () { return false; });
  }
  function peekJson(res) {
    try {
      if (res && typeof res.clone === "function") return res.clone().json();
      return res.json();
    } catch (e) { return Promise.reject(e); }
  }

  /* ---------- the fetch wrapper ---------- */
  function kindForUrl(url) {
    if (typeof url !== "string") return null;
    if (url.slice(-SUBMIT_SUFFIX.length) === SUBMIT_SUFFIX) return "submit";
    if (url.slice(-RENAME_SUFFIX.length) === RENAME_SUFFIX) return "rename";
    return null;
  }

  window.fetch = function (input, init) {
    var url = (typeof input === "string") ? input : (input && typeof input.url === "string" ? input.url : "");
    var kind = kindForUrl(url);
    var method = (init && init.method) ? String(init.method).toUpperCase() : "GET";
    var body = (init && typeof init.body === "string") ? init.body : null;
    if (!kind || method !== "POST" || body === null) {
      return rawFetch.apply(window, arguments);
    }
    if (kind === "submit") {
      /* Attach this game's stable clientId BEFORE the first attempt,
         so even a live attempt whose response is lost carries the
         same id the queue will retry with. All bookkeeping below
         (fingerprint, queue entries) uses the effective body. */
      var effectiveBody = ensureClientIdForSubmit(body);
      if (effectiveBody !== body) {
        var patched = {};
        if (init) for (var k in init) patched[k] = init[k];
        patched.body = effectiveBody;
        init = patched;
        body = effectiveBody;
      }
      try { stateByFingerprint[fingerprint(kind, body)] = (typeof window.state !== "undefined") ? window.state : null; } catch (e) { /* best-effort */ }
    }
    return rawFetch.call(window, input, init).then(function (res) {
      var status = (res && typeof res.status === "number") ? res.status : 0;
      if (status >= 200 && status < 300) {
        removeMatching(kind, body); /* a queued copy of this exact payload is now moot */
        return res;
      }
      if (kind === "rename" && status === 404) {
        return isStructured404(res, peekJson(res)).then(function (structured) {
          if (structured) { removeMatching(kind, body); return res; }
          enqueue(kind, url, body);
          return queuedResponse();
        });
      }
      enqueue(kind, url, body);
      return queuedResponse();
    }, function () {
      enqueue(kind, url, body);
      return queuedResponse();
    });
  };

  /* ---------- flushing ---------- */
  var flushing = false;

  function renameUrlFor(submitUrl) {
    return submitUrl.slice(0, submitUrl.length - SUBMIT_SUFFIX.length) + RENAME_SUFFIX;
  }

  /* After a queued submit lands: hand the row id back to the game
     state if it is still around, then send any rename that was
     wanted for this score. Rename failures join the queue as
     ordinary rename entries. */
  function afterQueuedSubmit(entry, id, done) {
    var renameName = takeIntentFor(entry);
    var stateRef = stateByFingerprint[entry.fp] || null;
    try {
      if (id && stateRef) {
        stateRef.sharedId = id;
        if (stateRef.hsEntry) stateRef.hsEntry.sharedId = id;
      }
    } catch (e) { /* best-effort */ }
    try {
      var wanted = (typeof window.sharedRenameWanted !== "undefined") ? window.sharedRenameWanted : null;
      if (!renameName && wanted && stateRef && wanted.game === stateRef && typeof wanted.name === "string") renameName = wanted.name;
      if (renameName && wanted && wanted.name === renameName) window.sharedRenameWanted = null;
    } catch (e) { /* best-effort */ }
    /* Killed-app fallback: no rename was ever recorded for this
       score (the app died before the player saved a name), but the
       entry persisted the name the game was started under. Use it —
       but only when the row actually went up as "Player"; the
       backend's rename guard (row still "Player", within 48h)
       double-checks that server-side. A name saved through the
       normal flow was handled above and always wins. */
    if (!renameName && id && entry.persistedName) {
      var submittedPayload = parseBody(entry.body);
      if (submittedPayload && submittedPayload.name === "Player") renameName = entry.persistedName;
    }
    if (!renameName || !id) { done(); return; }
    var renameBody = JSON.stringify({ id: id, name: renameName });
    rawFetch(renameUrlFor(entry.url), {
      method: "POST", headers: { "Content-Type": "application/json" }, body: renameBody
    }).then(function (res) {
      var status = (res && typeof res.status === "number") ? res.status : 0;
      if (status >= 200 && status < 300) { done(); return; }
      if (status === 404) {
        isStructured404(res, peekJson(res)).then(function (structured) {
          if (!structured) enqueue("rename", renameUrlFor(entry.url), renameBody);
          done();
        });
        return;
      }
      enqueue("rename", renameUrlFor(entry.url), renameBody);
      done();
    }, function () {
      enqueue("rename", renameUrlFor(entry.url), renameBody);
      done();
    });
  }

  function flushQueue() {
    if (flushing) return;
    var store = loadStore();
    var hasWork = store.entries.some(function (e) { return !e.parked; });
    if (!hasWork) return;
    flushing = true;
    var flushedAny = false;

    function finish() {
      flushing = false;
      if (flushedAny) {
        try { if (typeof window.fetchSharedLeaderboard === "function") window.fetchSharedLeaderboard(); } catch (e) { /* board refresh is a bonus */ }
      }
    }
    function fail(entry) {
      var s = loadStore();
      for (var i = 0; i < s.entries.length; i++) {
        if (s.entries[i].qid === entry.qid) {
          if (s.entries[i].attempts >= MAX_ATTEMPTS) {
            s.entries[i].parked = true;
            try { console.warn("[offline-queue] parked after " + MAX_ATTEMPTS + " failed attempts:", s.entries[i].kind, s.entries[i].body); } catch (e) {}
          }
          break;
        }
      }
      saveStore(s);
      var parkedNow = false;
      for (var j = 0; j < s.entries.length; j++) if (s.entries[j].qid === entry.qid && s.entries[j].parked) parkedNow = true;
      if (parkedNow) step(); else finish(); /* preserve order: stop at the first live failure */
    }
    function removeEntry(qid) {
      var s = loadStore();
      s.entries = s.entries.filter(function (e) { return e.qid !== qid; });
      saveStore(s);
    }
    function step() {
      var s = loadStore();
      var entry = null;
      for (var i = 0; i < s.entries.length; i++) if (!s.entries[i].parked) { entry = s.entries[i]; break; }
      if (!entry) { finish(); return; }
      entry.attempts = (entry.attempts || 0) + 1;
      var s2 = loadStore();
      for (var k = 0; k < s2.entries.length; k++) if (s2.entries[k].qid === entry.qid) s2.entries[k].attempts = entry.attempts;
      saveStore(s2);

      rawFetch(entry.url, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: entry.kind === "submit" ? bodyWithPersistedClientId(entry) : entry.body
      }).then(function (res) {
        var status = (res && typeof res.status === "number") ? res.status : 0;
        if (status >= 200 && status < 300) {
          flushedAny = true;
          if (entry.kind === "submit") {
            peekJson(res).then(function (d) {
              var id = (d && d.id) ? String(d.id) : null;
              afterQueuedSubmit(entry, id, function () { removeEntry(entry.qid); step(); });
            }, function () {
              afterQueuedSubmit(entry, null, function () { removeEntry(entry.qid); step(); });
            });
          } else {
            removeEntry(entry.qid);
            step();
          }
          return;
        }
        if (entry.kind === "rename" && status === 404) {
          isStructured404(res, peekJson(res)).then(function (structured) {
            if (structured) { flushedAny = true; removeEntry(entry.qid); step(); }
            else fail(entry);
          });
          return;
        }
        fail(entry);
      }, function () { fail(entry); });
    }
    try { step(); } catch (e) { flushing = false; }
  }

  /* ---------- wanted-rename capture (results screen) ---------- */
  function payloadFingerprintFromState() {
    try {
      var st = window.state; if (!st) return null;
      var internal = st.suddenDeath ? "suddendeath" : (st.challenge ? "challenge" : st.mode);
      var label = (typeof window.modeLabel === "function") ? window.modeLabel(internal) : null;
      if (!label) return null;
      var pace = "Standard";
      try { if (typeof window.paceKey === "function" && window.paceKey(st.pace) === "relaxed") pace = "Relaxed"; } catch (e) {}
      return { name: "Player", score: st.score, mode: label, pace: pace };
    } catch (e) { return null; }
  }
  function captureWantedRename() {
    try {
      var wanted = (typeof window.sharedRenameWanted !== "undefined") ? window.sharedRenameWanted : null;
      if (wanted && typeof wanted.name === "string") {
        recordRenameIntent(wanted.name, payloadFingerprintFromState(), wanted.game);
      }
    } catch (e) { /* best-effort */ }
  }
  function wireLateNameCapture() {
    var btn = document.getElementById("lateNameBtn");
    var input = document.getElementById("lateName");
    if (btn && !btn.__offlineQueueWired) {
      btn.__offlineQueueWired = true;
      /* Registered after the game's own click handler, so the
         game's saveLateName has already run (and recorded its
         wanted rename) by the time this fires. */
      btn.addEventListener("click", function () { setTimeout(captureWantedRename, 0); });
    }
    if (input && !input.__offlineQueueWired) {
      input.__offlineQueueWired = true;
      input.addEventListener("keydown", function (ev) { if (ev && ev.key === "Enter") setTimeout(captureWantedRename, 0); });
    }
  }

  /* ---------- triggers ---------- */
  function kick() { wireLateNameCapture(); wireCoverNameCapture(); flushQueue(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", kick);
  else setTimeout(kick, 0);
  window.addEventListener("load", kick);
  window.addEventListener("online", flushQueue);
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") flushQueue();
  });
  try {
    var net = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Network;
    if (net && typeof net.addListener === "function") {
      net.addListener("networkStatusChange", function (status) {
        if (status && status.connected) flushQueue();
      });
    }
  } catch (e) { /* no Network plugin installed: the events above cover it */ }

  /* Exposed for the app harness / debugging; not used by the game. */
  window.__offlineScoreQueue = {
    flush: flushQueue,
    _load: loadStore,
    key: QUEUE_KEY
  };
})();
