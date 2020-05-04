const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const SystemProfile = sequelize.define(
    "SystemProfile",
    {
      systemProfileID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      system_id: {
        type: DataTypes.INTEGER
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  return SystemProfile;
};
