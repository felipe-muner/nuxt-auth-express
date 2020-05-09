"use strict";

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
    Functionality.hasMany(models.ProfileFunctionality, {
      foreignKey: "functionality_ID",
      sourceKey: "functionalityID"
    });
    Functionality.hasMany(models.Functionality, {
      foreignKey: "father_ID",
      sourceKey: "functionalityID",
      as: "FunctionalityChildren"
    });
    Functionality.belongsTo(models.System, {
      foreignKey: "system_ID",
      targetKey: "systemID"
    });
    Functionality.belongsTo(models.Functionality, {
      foreignKey: "father_ID",
      targetKey: "functionalityID",
      as: "FunctionalityFather"
    });
  };

  return Functionality;
};
