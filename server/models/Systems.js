const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Systems = sequelize.define(
    "Systems",
    {
      systemsID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  return Systems;
};
