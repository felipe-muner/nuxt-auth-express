"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("System", [
      {
        name: "System One"
      },
      {
        name: "System Two"
      },
      {
        name: "System Three"
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("System", null, {});
  }
};
