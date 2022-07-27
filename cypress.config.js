const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    // baseUrl: 'https://demo.openmrs.org/openmrs/login.htm',
    watchForFileChanges: false,
    pageLoadTimeout: 10000  
  },
});
