require("dotenv").config();
const {
  sequelize,
  User,
  System,
  SystemProfile,
  Functionality,
  ProfileFunctionality,
  UserAccessControl
} = require("../models");

const users = require("./users");
const system = require("./system");
const systemProfile = require("./systemProfile");
const functionality = require("./functionality");
const profileFunctionality = require("./profileFunctionality");
const userAccessControl = require("./userAccessControl");

sequelize.sync({ force: true }).then(async () => {
  await users.map(user => User.create(user));
  await system.map(s => System.create(s));
  await systemProfile.map(sp => SystemProfile.create(sp));
  await functionality.map(f => Functionality.create(f));
  await profileFunctionality.map(pf => ProfileFunctionality.create(pf));
  await userAccessControl.map(uac => UserAccessControl.create(uac));
});

// try {
//   sequelize.sync({ force: true }).then(async () => {
//     await Promise.all(users.map(user => User.create(user)));
//   });

//   sequelize.sync({ force: true }).then(async () => {
//     await Promise.all(systems.map(systems => Systems.create(systems)));
//   });
// } catch (error) {
//   console.log(error);
// }
