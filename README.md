# Trivia or Nada — Capacitor App (setup phase)

Native phone-app wrapper for the Trivia or Nada web game, built with
Capacitor 8.6.0. **Setup only — nothing has been submitted to any app
store.**

- **App name:** Trivia or Nada
- **App ID:** `com.savailleentertainment.triviaornada`
- **Source game:** `~/workspace/your_files/trivia-or-nada/` (self-contained
  HTML + 15 picture packs, ~30 MB)
- **Live website:** https://savailleentertainment.com (Cloudflare Pages)
- **Live leaderboard backend:** same site, Pages Functions + D1

## Layout

```
trivia-app/
├── capacitor.config.ts   # appId, appName, webDir: 'www'
├── package.json          # @capacitor/{core,cli,ios,android} 8.6.0
├── scripts/
│   ├── sync-game.sh      # copies the game into www/ (see below)
│   ├── offline-queue.js  # app-only offline score queue, injected by sync
│   └── test-offline-queue.mjs  # harness for the queue (node scripts/test-offline-queue.mjs)
├── www/                  # bundled game: index.html + assets/ (~30 MB)
├── ios/                  # Xcode project (App.xcworkspace)
└── android/              # Android Studio / Gradle project
```

## How the game is bundled

`scripts/sync-game.sh` copies the game into `www/` and applies four
deployment-only adaptations to the **copy** (the source game file is
never modified; no scoring, judging, or timer code is touched):

1. **Entry point:** `trivia-or-nada.html` → `www/index.html`
   (Capacitor serves `index.html`).
2. **Leaderboard API → live backend.** The game calls three relative URLs:
   `/.netlify/functions/submit-score`,
   `/.netlify/functions/get-leaderboard`, and
   `/.netlify/functions/update-score-name`. In the app copy these become
   absolute `https://savailleentertainment.com/.netlify/functions/...`
   URLs. A Capacitor app serves its pages from a local origin
   (`capacitor://localhost` on iOS, `https://localhost` on Android), so a
   relative fetch would hit the local file system and fail. The live
   backend sends `Access-Control-Allow-Origin: *` (verified in
   `~/workspace/cloudflare-pages/functions/lib.js`, including an OPTIONS
   preflight handler), so the app origin is allowed. No proxy or native
   HTTP plugin is needed.
3. **AdSense removed from the app copy.** AdSense is for websites; ads
   inside a native app are AdMob's territory, and AdSense in a WebView
   wrapper risks a policy violation. The web version keeps its AdSense
   snippet. If the app should earn from ads later, that is an AdMob
   integration, not this snippet.
4. **Offline score queue injected.** `scripts/offline-queue.js` is
   inserted into the copy immediately before the game's own script —
   see "Offline behaviour" below.

After re-exporting the game from the artifact, refresh the bundle with:

```bash
bash scripts/sync-game.sh && npx cap sync
```

## Offline behaviour

- The game itself, all questions, and all picture packs are bundled,
  so a game plays fully offline.
- Device-local boards save offline exactly as before — untouched.
- **Shared-board submissions now queue on the device** (W.'s
  requirement, 2026-11-10). `scripts/sync-game.sh` injects
  `scripts/offline-queue.js` into the app copy only (the artifact and
  the web version are unchanged): it intercepts POSTs to the shared
  `submit-score` / `update-score-name` endpoints, and any submission
  that fails or is answered non-2xx is stored in localStorage under
  the dedicated key `trivia-or-nada.pending-scores.v1` and flushed,
  in order, when connectivity returns (app start, `online` event,
  foreground). An entry is removed only after a 2xx; the backend's
  structured 404 for a rename counts as resolved. Post-game renames
  are carried too, including a rename asked for while its score was
  still queued. The shared boards themselves still need network to
  display.
- **Idempotent submits + killed-app names** (queue v4, 2026-11-10).
  Every submit — the first live attempt included — carries a
  client-generated `clientId`. Ids are per finished game when the
  game's own state object is visible: the queue keys reuse on that
  object (startGame builds a fresh state per game and endGame
  submits from it — the bundle's single `submitSharedScore` call
  site), so two identical-scoring games finished back-to-back get
  different ids and both post (v2 derived the id from the score's
  fields and could merge such identical twins into one row). In
  every other case — no state object, an unseen one, any
  uncertainty — v4 mints a fresh id per submission observation and
  never reuses an id across submissions (v3's degraded fallback of
  borrowing a still-queued identical submission's id is removed,
  so twins can never be merged by an id guess; duplicate
  protection rests on the kept per-game id, the frozen id in a
  queued entry, and the server dedupe). The id is minted
  before the game's first attempt and, once a submit queues, lives
  in the queue entry, so retries reuse it across restarts.
  The Cloudflare backend stores it in `scores.client_id`
  (cloudflare-pages `migrations/0002_client_id.sql`) and answers a
  replay with the existing row plus `deduped:true` instead of a
  second insert — the old lost-response double-post window is
  closed. Note: dedupe is live only once the updated Functions and
  the 0002 migration are deployed (needs W.'s Cloudflare token);
  until then the backend ignores the field and behaviour is as in
  queue v1. The Netlify fallback backend has no dedupe (follow-up,
  out of scope). Also: a queued score submitted as "Player"
  persists a fallback name — the live game state's name, else the
  game's own mid-game progress save, else the queue's read-only
  snapshot of the cover name field (observed on input/change, so
  even a name typed but never used to start a game survives a
  kill) — and a flush after an app kill follows the submit with an
  automatic rename to that name; a name saved through the normal
  flow always wins, and a genuinely nameless game still posts as
  "Player".
  Verified by `scripts/test-offline-queue.mjs` (21 checks against
  the exact injected bundle script) and the backend test
  `~/workspace/cloudflare-pages/tests/test-submit-dedupe.mjs`
  (7 checks against the real handlers on a real SQLite database);
  a real-device test is still pending.
- Google Fonts (Archivo / Space Mono) load from fonts.googleapis.com and
  fall back to system fonts when offline.
- Picture-pack ZIPs are fetched from local `assets/` in the app, not
  from the network.

## Other URL notes

- **Challenge a friend** copies a link to the muse.ai public link
  (`https://muse.ai/s/trivia-or-nada-...`). In the app that link opens
  in the system browser, showing the web version — it works, it just
  leaves the app.
- The Ko-fi tip link and picture source/attribution links also open in
  the system browser when tapped.

## What still needs a Mac / accounts

### iOS (App Store) — Mac required

- **A Mac with Xcode** — iOS apps can only be built with Xcode, which
  only runs on macOS. This Linux VM can scaffold the project (done) but
  cannot build or run it. On the Mac: `cd ios/App && pod install`,
  then open `App.xcworkspace` in Xcode and build/run, or
  `xcodebuild -workspace App.xcworkspace -scheme App`.
- **Apple Developer account — $99/year.** Required to sign the app, use
  TestFlight, and submit to the App Store. Enrol at
  developer.apple.com with the Savaille Entertainment organisation
  details; the bundle ID `com.savailleentertainment.triviaornada`
  must be registered under that account.
- **App Store review.** Apple guideline 4.2 (minimum functionality)
  has rejected apps that are just a website in a wrapper. This is a
  full interactive game, not a brochure page, but a submission is
  stronger with some native integration (e.g. push notifications,
  native share sheet, haptics). Worth adding before submitting.

### Android (Google Play) — no Mac needed

- **Cloud build (recommended):** GitHub Actions workflow
  `.github/workflows/android.yml` — builds the debug APK on an
  Ubuntu runner on every push to `main` (or manually from the Actions
  tab) and uploads `app-debug.apk` as an artifact (14-day retention).
  It installs JDK 17, the Android SDK, and exactly the SDK components
  the project targets (platform-tools, `platforms;android-36`,
  `build-tools;36.0.0`), then runs `./gradlew assembleDebug`.
- **Local build on the dev VM (currently blocked):** the SDK and JDK
  are installed on this VM — JDK 17.0.20.1
  (`/usr/lib/jvm/java-17-openjdk-amd64`), Android SDK at
  `~/Android/sdk` (cmdline-tools 19.0, platform-tools 37.0.2,
  `platforms;android-36`, `build-tools;36.0.0`, licenses accepted),
  Gradle 8.14.3 at `~/gradle/gradle-8.14.3`, `android/local.properties`
  points at the SDK, and `~/.gradle/gradle.properties` carries the VM
  egress-proxy settings (direct internet is blocked here). **But the
  build cannot run on this VM yet:** Gradle's daemon communicates
  over a local TCP socket, and this VM's sandbox blocks Java
  cross-process TCP (`other_tcp` denied — a Java test client receives
  the sandbox policy message instead of the daemon's reply, while an
  identical Python test works). The fix is to enable `other_tcp` in
  Muse settings → Permissions → Direct network protocols, or just use
  the cloud workflow above. Until then, `cd android && ./gradlew
  assembleDebug` fails with "Could not receive a message from the
  daemon" on this VM even though the project, SDK, and JDK are all in
  place. Note the Gradle wrapper (`./gradlew`) also cannot download
  its distribution here (Java HTTPS through the proxy fails the same
  way) — use the installed Gradle at `~/gradle/gradle-8.14.3/bin/gradle`
  or pre-seed the wrapper dist.
- **Google Play developer registration — $25 one-time** — to publish
  on Google Play. A signed release bundle (not the debug APK) is
  needed for submission; that requires a release keystore, which does
  not exist yet — do not create one casually, it is the app's signing
  identity.

### Both stores — still to do before submitting

- **Real app icon.** Both platforms currently carry Capacitor's default
  placeholder icon. Supply a 1024×1024 PNG and generate the icon sets
  (`npx @capacitor/assets generate` with an `assets/icon.png` and
  `assets/splash.png` in this project).
- **Splash screen.** Default Capacitor splash is in place; replace with
  a branded one alongside the icon.
- **Privacy labels / data declarations.** The app sends a player name +
  score to the leaderboard API and loads Google Fonts; the store
  privacy questionnaires must declare that.
- **Versioning.** `package.json` is 1.0.0; bump version/build numbers
  per release (`ios/App/App.xcodeproj`, `android/app/build.gradle`).

## Known issues / open items

- **Bundled game is one fix behind.** The copy in `www/` was synced
  from the last export (2026-11-08), which predates the Giza fix
  ("Egyptians" accepted as an answer). Re-export the shareable
  artifact and re-run `scripts/sync-game.sh` before any real build so
  the app ships the current game.
- **No native plugins installed yet.** No push notifications, no
  native share, no in-app purchases, no haptics. The game uses
  copy-to-clipboard for challenge links, which works in the WebView.
- **No automated test of the app on a device.** The projects scaffold
  and sync cleanly and the synced bundles contain the rewritten API
  URLs. The iOS cloud-build workflow exists (`.github/workflows/ios.yml`).
  An Android cloud-build workflow now exists too
  (`.github/workflows/android.yml`, debug APK on every push to `main`) —
  it has not run yet (no GitHub repo to run it in). No local Android
  build has succeeded: the VM sandbox blocks Gradle's daemon TCP
  (see "Android (Google Play)" above).
- The `MODULE_TYPELESS_PACKAGE_JSON` warning from `npx cap` is
  cosmetic (Node noting `capacitor.config.ts` is ESM); it does not
  affect the build.
