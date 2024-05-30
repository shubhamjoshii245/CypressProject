const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      module.exports = {
        e2e: {
          screenshotOnRunFailure: true, // Default is true
          screenshotsFolder: 'cypress/screenshots', // Custom folder for screenshots
        }
      };
      
    },
    
  },
});
