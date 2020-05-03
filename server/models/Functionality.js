const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Functionality = sequelize.define(
    "Functionality",
    {
      functionalityID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      dateOfBirth: {
        type: DataTypes.DATE
      },
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING,
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  return Functionality;
};
