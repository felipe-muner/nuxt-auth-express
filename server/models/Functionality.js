"use strict";
module.exports = (sequelize, DataTypes) => {
  const Functionality = sequelize.define(
    "Functionality",
    {
      userID: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      dateOfBirth: DataTypes.DATE
    },
    { timestamps: false }
  );
  Functionality.associate = function(models) {
    // associations can be defined here
  };
  return Functionality;
};
