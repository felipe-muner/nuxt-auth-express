"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ProfileFunctionality", {
      profileFunctionalityID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profile_ID: {
        type: Sequelize.INTEGER
      },
      functionality_ID: {
        type: Sequelize.INTEGER
      },
      canInsert: {
        type: Sequelize.BOOLEAN
      },
      canUpdate: {
        type: Sequelize.BOOLEAN
      },
      canDelete: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ProfileFunctionality");
  }
};
