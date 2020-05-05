"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("UserAccessControl", [
      {
        user_id: 1,
        system_id: 1,
        profile_id: 1,
        menuOption: null
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("UserAccessControl", null, {});
  }
};
