const {defineConfig} = require ("cypress");

module.exports = defineConfig ({
  env: {
    emailDefault: 'email@email.com',
    passwordDefault: '123456',
    nomeDefault: 'nameTest',
  },
  e2e: {
    baseUrl: 'https://conduit-realworld-example-app.fly.dev/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
