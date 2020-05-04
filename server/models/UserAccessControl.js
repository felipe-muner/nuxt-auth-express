module.exports = (sequelize, DataTypes) => {
  const UserAccessControl = sequelize.define(
    "UserAccessControl",
    {
      userAccessControlID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER
        //change estrangeira
      },
      system_id: {
        type: DataTypes.INTEGER
        //change estrangeira
      },
      profile_id: {
        type: DataTypes.INTEGER
      },
      menuOption: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  // User.prototype.comparePassword = async function(password) {
  //   return await bcrypt.compare(password, this.password);
  // };

  // User.prototype.toJSON = function() {
  //   var values = Object.assign({}, this.get());
  //   delete values.password;
  //   return values;
  // };

  return UserAccessControl;
};
