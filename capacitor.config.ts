import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.savailleentertainment.triviaornada',
  appName: 'Trivia or Nada',
  webDir: 'www',
  // The game is fully self-contained in www/ (HTML + picture packs).
  // The only network calls the game makes are:
  //  - the shared leaderboard API, rewritten to absolute live URLs by
  //    scripts/sync-game.sh (the backend sends Access-Control-Allow-Origin: *,
  //    so the app origin is allowed)
  //  - Google Fonts (graceful fallback to system fonts when offline)
  //  - attribution/tip links, opened only when tapped
};

export default config;
