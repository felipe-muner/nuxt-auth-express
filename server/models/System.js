module.exports = (sequelize, DataTypes) => {
  const System = sequelize.define(
    "System",
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

  return System;
};
