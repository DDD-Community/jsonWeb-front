// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'vbwwaz',
  viewportWidth: 370,
  viewportHeight: 896,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // eslint-disable-next-line global-require
      return require('./cypress/plugins/index.js')(on, config);
    },
    baseUrl: 'http://localhost:3000/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: false,
  },
});
