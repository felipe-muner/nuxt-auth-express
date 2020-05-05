"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("ProfileFunctionality", [
      {
        profile_ID: 1,
        functionality_ID: 1,
        canInsert: true,
        canUpdate: true,
        canDelete: true
      },
      {
        profile_ID: 1,
        functionality_ID: 2,
        canInsert: true,
        canUpdate: true,
        canDelete: true
      },
      {
        profile_ID: 1,
        functionality_ID: 3,
        canInsert: true,
        canUpdate: true,
        canDelete: true
      },
      {
        profile_ID: 1,
        functionality_ID: 4,
        canInsert: true,
        canUpdate: true,
        canDelete: true
      },
      {
        profile_ID: 1,
        functionality_ID: 5,
        canInsert: true,
        canUpdate: true,
        canDelete: true
      },
      {
        profile_ID: 1,
        functionality_ID: 6,
        canInsert: true,
        canUpdate: true,
        canDelete: true
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ProfileFunctionality", null, {});
  }
};
