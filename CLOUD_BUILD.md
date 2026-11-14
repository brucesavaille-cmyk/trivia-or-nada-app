# iOS cloud build (no Mac needed)

W. has no Mac — iPhone and iPad only. The iOS app is therefore built in
the cloud with **GitHub Actions**, which provides a macOS runner with
Xcode. Nothing has been submitted to any store.

## The workflow

**File:** `.github/workflows/ios.yml` — "Build iOS app (unsigned)".

What it does, in order:

1. Checks out the repo on a `macos-15` runner (Xcode included).
2. Sets up Node.js 22 and installs dependencies with `npm ci`.
3. Runs `npx cap sync ios` to copy the bundled game (`www/`) into the
   Xcode project.
4. Runs `pod install` in `ios/App` — but only if a `Podfile` exists.
   The project currently has no CocoaPods dependencies (it uses Swift
   Package Manager), so this step is a no-op for now.
5. Builds the app with `xcodebuild` (`App.xcworkspace`, scheme `App`,
   Debug) with `CODE_SIGNING_ALLOWED=NO` — **unsigned**.
6. Uploads the resulting `App.app` as a workflow artifact
   (`trivia-or-nada-ios-unsigned`, kept 14 days).

### How to trigger it

- **Automatically:** every push to the `main` branch.
- **Manually:** GitHub repo → Actions → "Build iOS app (unsigned)" →
  Run workflow.

The run's artifact (Actions → the run → Artifacts) is an **unsigned**
`.app`. It proves the project compiles end to end, but it **cannot be
installed on a phone and cannot go to the App Store** — that needs
signing (below).

## What is NOT done yet

### 1. No GitHub repo exists yet

No repo has been created and nothing has been pushed — that needs a
GitHub account. Once the repo exists, push this project to it
(`www/` **must** be committed — the workflow builds from the bundled
game in `www/`; `node_modules/` and `ios/App/Pods/` are ignored via
`.gitignore`). The workflow will then run on the first push to `main`.

> Before any real build, refresh the bundled game: re-export the
> shareable artifact, then run `bash scripts/sync-game.sh && npx cap sync`
> — the copy currently in `www/` predates the Giza fix.

### 2. Signing — needs an Apple Developer account ($99/yr)

A signed build (for TestFlight or the App Store) needs Apple's signing
assets: a distribution certificate and a provisioning profile for the
bundle ID `com.savailleentertainment.triviaornada`, registered under an
Apple Developer account. The Developer account is the one thing only W.
can provide — Apple requires the account holder to enrol.

Once the account exists, there are two standard ways to get the signing
assets into the GitHub workflow as secrets:

- **fastlane match (recommended).** fastlane's `match` stores the
  certificate and provisioning profile, encrypted, in a private GitHub
  repo. The workflow then runs `fastlane match` to fetch them at build
  time and signs the app. One setup step, and the same certificates work
  for every future build and for any other Mac that needs them.
- **Manual certificate + profile secrets.** Export the distribution
  certificate (`.p12`, with its password) and the provisioning profile
  (`.mobileprovision`) from Xcode/Apple Developer, and store them as
  GitHub secrets (e.g. `IOS_CERTIFICATE_P12`,
  `IOS_CERTIFICATE_PASSWORD`, `IOS_PROVISIONING_PROFILE`), then add
  workflow steps to install them into the runner's keychain before
  `xcodebuild`. Simpler to understand, more manual work each time the
  certificate expires.

Either way, the workflow's `xcodebuild` step then drops
`CODE_SIGNING_ALLOWED=NO` and signs with the installed identity, and
the output becomes an `.ipa` that can go to TestFlight / the App Store.

### 3. Before submitting to the App Store

- Real app icon and branded splash screen (both platforms currently
  have Capacitor's placeholder).
- Store privacy declarations (the app sends player name + score to the
  leaderboard API, and loads Google Fonts).
- Apple guideline 4.2 has rejected pure website wrappers — this is a
  full interactive game, but some native integration (push, native
  share, haptics) would strengthen the submission.
- The Giza fix must be re-synced into `www/` first (see above).
