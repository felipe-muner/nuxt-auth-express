"use strict";
module.exports = (sequelize, DataTypes) => {
  const System = sequelize.define(
    "System",
    {
      systemID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: DataTypes.STRING
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  System.associate = function(models) {
    // associations can be defined here
  };

  return System;
};
