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
      father_id: {
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      action: {
        type: DataTypes.STRING
      },
      icon: {
        type: DataTypes.STRING
      },
      system_id: {
        type: DataTypes.STRING
      },
      priority: {
        type: DataTypes.INTEGER
      },
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
