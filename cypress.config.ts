import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:4200/',
    specPattern: 'acceptance-tests/**/*.spec.ts',
    screenshotsFolder: 'report/acceptance-tests/screenshots',
    videosFolder: 'reports/acceptance-tests/videos',
    viewportWidth: 1920,
    viewportHeight: 1080,
    supportFile: 'acceptance-tests/drivers/cypress/config.ts',
  },
})
