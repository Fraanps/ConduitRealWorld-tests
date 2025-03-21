const {defineConfig} = require ("cypress");

module.exports = defineConfig ({
  env: {
    emailDefault: 'email@email.com',
    passwordDefault: '123456',
    nameDefault: 'nameTest',
  },

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reporterPageTitle: 'Conduit-automation-tests',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  e2e: {
    baseUrl: 'https://conduit-realworld-example-app.fly.dev/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
