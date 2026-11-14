#!/usr/bin/env bash
# sync-game.sh — copy the Trivia or Nada web game into www/ for Capacitor.
#
# Source: ~/workspace/your_files/trivia-or-nada/  (trivia-or-nada.html + assets/)
# Output: www/index.html + www/assets/
#
# Four deployment-only adaptations are applied to the COPY (the source
# game file is never modified, and no scoring/judging/timer code is touched):
#   1. Entry point: trivia-or-nada.html -> www/index.html (Capacitor serves
#      index.html).
#   2. Leaderboard API: the game's relative URLs
#        /.netlify/functions/submit-score
#        /.netlify/functions/get-leaderboard
#        /.netlify/functions/update-score-name
#      become absolute live-backend URLs. (Since the speed pass the game
#      script ships as assets/game-1.js … game-6.js next to a slim
#      index.html; the three URL constants live in game-6.js, so the
#      rewrite runs over index.html AND every part file, asserting the
#      quoted constants total exactly one each across the bundle.)
#        https://savailleentertainment.com/.netlify/functions/...
#      A Capacitor app serves its pages from a local origin
#      (capacitor://localhost on iOS, https://localhost on Android), so a
#      relative fetch would hit the local file system and fail. The live
#      backend sends Access-Control-Allow-Origin: *, so the app origin is
#      allowed. (The rename URL was missed by earlier syncs, which left
#      in-app renames pointing at the local origin; it is rewritten too
#      as of the offline-queue sync.)
#   3. AdSense: the AdSense <script> is removed from the app copy. AdSense
#      is for websites; ads inside a native app are AdMob's territory and
#      AdSense in a WebView wrapper risks a policy violation. The web
#      version keeps its AdSense snippet.
#   4. Offline score queue: scripts/offline-queue.js is injected into
#      the copy immediately before the game's FIRST <script>. (The
#      speed-pass index.html ships three inline blocks — the part-loader
#      bootstrap, then the additive Stage 1 profile layer, then (since
#      2026-11-12) the build-version check, which only fetches
#      version.json and never a score endpoint — so the queue goes
#      before the first, where its fetch wrapper precedes all
#      game code; the game parts load after it.) It wraps
#      window.fetch for the submit-score / update-score-name POSTs
#      only: every submit carries a clientId — per finished game
#      when the game's own state object is visible (so
#      identical-scoring twin games never share one), per submission
#      observation otherwise, and never reused across submissions
#      on uncertainty (queue v4; the backend
#      dedupes replays server-side — see cloudflare-pages
#      migrations/0002_client_id.sql), a submission made offline (or
#      answered non-2xx) is stored in localStorage under the
#      dedicated key "trivia-or-nada.pending-scores.v1" and flushed,
#      in order, when connectivity returns (app start, "online"
#      event, foreground), and a queued score submitted as "Player"
#      keeps the name its game was started under — or, failing that,
#      the queue's read-only snapshot of the cover name field — so a
#      flush after an app kill can still rename its row. The game's
#      own localStorage keys and its device-local boards are never
#      written. See offline-queue.js for the full contract.
#
# Re-run this script whenever the game is re-exported from the artifact so
# the app bundles the latest build.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
SRC="$HOME/workspace/your_files/trivia-or-nada"
DEST="$PROJECT_DIR/www"
LIVE="https://savailleentertainment.com"

if [ ! -f "$SRC/trivia-or-nada.html" ]; then
  echo "ERROR: source game not found at $SRC/trivia-or-nada.html" >&2
  exit 1
fi

rm -rf "$DEST"
mkdir -p "$DEST"

cp -r "$SRC/assets" "$DEST/assets"
cp "$SRC/trivia-or-nada.html" "$DEST/index.html"

python3 - "$DEST" "$LIVE" "$SCRIPT_DIR/offline-queue.js" <<'PYEOF'
import glob, os, re, sys
dest, live, queue_path = sys.argv[1], sys.argv[2], sys.argv[3]
path = os.path.join(dest, 'index.html')

# 2. Point the leaderboard API at the live backend. The URL constants
#    live in assets/game-6.js since the speed pass; rewrite them wherever
#    they appear (index.html + part files) and assert the quoted
#    constants total exactly one each across the whole bundle.
targets = [path] + sorted(glob.glob(os.path.join(dest, 'assets', 'game-*.js')))
totals = {'submit-score': 0, 'get-leaderboard': 0, 'update-score-name': 0}
for t in targets:
    d = open(t, encoding='utf-8').read()
    for ep in totals:
        # The game source may carry the relative constant (rewrite it) or,
        # since the link fix, the absolute one already (keep it). Either
        # way each endpoint must total exactly one quoted constant.
        n = d.count('"/.netlify/functions/%s"' % ep) \
            + d.count('"%s/.netlify/functions/%s"' % (live, ep))
        totals[ep] += n
        d = d.replace('"/.netlify/functions/%s"' % ep,
                      '"%s/.netlify/functions/%s"' % (live, ep))
    open(t, 'w', encoding='utf-8').write(d)
assert all(v == 1 for v in totals.values()), \
    'expected 1 submit + 1 board + 1 rename URL across the bundle, found %s' % totals

data = open(path, encoding='utf-8').read()

# 3. Strip the AdSense snippet (see header comment).
adsense = re.compile(
    r'<script async src="https://pagead2\.googlesyndication\.com/pagead/js/adsbygoogle\.js\?client=ca-pub-[0-9]+" crossorigin="anonymous"></script>\n?')
data, n_ads = adsense.subn('', data)
assert n_ads <= 1, 'expected at most 1 AdSense snippet, found %d' % n_ads

# 4. Inject the app-only offline score queue (see header comment).
queue_js = open(queue_path, encoding='utf-8').read()
assert 'OFFLINE-SCORE-QUEUE v4' in queue_js, 'offline-queue.js marker missing'
assert '</script' not in queue_js.lower(), 'offline-queue.js must not contain a script close tag'
assert data.count('<script>') == 4, \
    'expected exactly 4 bare <script> blocks (bootstrap + Stage 1 layer + Cover Menu/Closest Wins layer + version check), found %d' % data.count('<script>')
assert 'OFFLINE-SCORE-QUEUE v4' not in data, 'queue already injected?'
data = data.replace('<script>', '<script>\n' + queue_js + '\n</script>\n<script>', 1)
assert data.count('OFFLINE-SCORE-QUEUE v4') == 1, 'queue injection failed'

open(path, 'w', encoding='utf-8').write(data)
print('index.html: API URLs rewritten to %s, AdSense snippet %s, offline score queue injected' % (live, 'removed' if n_ads else 'already absent (fresh export)'))
PYEOF

echo "www/ populated: $(du -sh "$DEST" | cut -f1) total, $(find "$DEST" -type f | wc -l) files"
