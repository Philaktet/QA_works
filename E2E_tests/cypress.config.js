const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-fail-fast/plugin.js")(on, config);
      return config;
    },
  },
});
