const { defineConfig } = require("cypress");

require("dotenv").config();

console.log("CYPRESS_PROJECT_ID", process.env.CYPRESS_PROJECT_ID);

module.exports = defineConfig({
	projectId: process.env.CYPRESS_PROJECT_ID,
});
