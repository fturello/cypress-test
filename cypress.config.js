const { defineConfig } = require("cypress");

require("dotenv").config();

console.log("CYPRESS_PROJECT_ID", process.env.CYPRESS_PROJECT_ID);

module.exports = defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
