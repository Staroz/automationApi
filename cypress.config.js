const { defineConfig } = require("cypress");


module.exports = defineConfig({
  defaultCommandTimeout: 7000,
  viewportWidth: 1200,
  viewportHeight: 660,
  experimentalModifyObstructiveThirdPartyCode: true,
    env: {
      key: "ab88591249aebbd860f4ca1576a211f0",
      token: "ATTAd0cc188f185548fdc1f1cc944d6966a6d78854ab3aa4d1909b61f8a37d72e296B43387C9",
      boardName: "Test 01",
      newBoardName: "Test 02",
    }

    e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl:"https://api.trello.com/1/boards/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern:[
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ],
  },
});