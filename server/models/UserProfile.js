module.exports = (sequelize, DataTypes) => {
  const UserProfile = sequelize.define(
    "UserProfile",
    {
      userProfileId: {
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

  // User.prototype.comparePassword = async function(password) {
  //   return await bcrypt.compare(password, this.password);
  // };

  // User.prototype.toJSON = function() {
  //   var values = Object.assign({}, this.get());
  //   delete values.password;
  //   return values;
  // };

  return UserProfile;
};
