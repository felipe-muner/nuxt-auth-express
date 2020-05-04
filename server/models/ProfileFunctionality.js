const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const ProfileFunctionality = sequelize.define(
    "ProfileFunctionality",
    {
      profileFunctionalityID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      profile_id: {
        type: DataTypes.INTEGER
      },
      functionality_id: {
        type: DataTypes.INTEGER
      },
      canInsert: {
        type: DataTypes.BOOLEAN
      },
      canEdit: {
        type: DataTypes.BOOLEAN
      },
      canDelete: {
        type: DataTypes.BOOLEAN
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  return ProfileFunctionality;
};
