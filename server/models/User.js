"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      userID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      dateOfBirth: DataTypes.DATE
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
