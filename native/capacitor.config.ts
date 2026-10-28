import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // Bundle id is anchored to a domain Greg owns (aiccountable.io).
  // It can be changed freely UNTIL the first store submission; after that it is permanent.
  appId: 'io.aiccountable.amuse',
  appName: 'AMUSE',
  webDir: 'www',
  server: {
    // The game is fully self contained; no remote server URL in production builds.
    androidScheme: 'https'
  },
  plugins: {
    Geolocation: {}
  }
};

export default config;
