"use strict";

const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Functionality = sequelize.define(
    "Functionality",
    {
      functionalityID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      father_ID: DataTypes.STRING,
      name: DataTypes.STRING,
      action: DataTypes.STRING,
      icon: DataTypes.STRING,
      system_ID: DataTypes.INTEGER,
      priority: DataTypes.INTEGER,
      active: DataTypes.BOOLEAN
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  Functionality.associate = function(models) {
    // associations can be defined here
  };

  return Functionality;
};
