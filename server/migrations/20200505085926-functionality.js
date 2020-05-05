"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Functionality", {
      functionalityID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      father_ID: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      action: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      system_ID: {
        type: Sequelize.INTEGER
      },
      priority: {
        type: Sequelize.INTEGER
      },
      active: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Functionality");
  }
};
