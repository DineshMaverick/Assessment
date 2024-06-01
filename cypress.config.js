const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true,
  },
}),

module.exports = defineConfig({
  chromeWebSecurity: true,
  reporter: 'mocha-junit-reporter',
  "electronOptions": {
    "webPreferences": {
      "allowRendererProcessReuse": false
    }
  },
  reporterOptions: {
    mochaFile: 'cypress/reports/junit/test-results.xml',
    testsuitesTitle: true,
  },
  redirectionLimit: 200,
  retries: 0,
  defaultCommandTimeout: 0,
  e2e: {
   setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    excludeSpecPattern: '**/*.js',
    specPattern: 'cypress/e2e/**/*.{feature,features}',
    baseUrl: 'https://trelegy.com/',
  },
});

