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
  // users.map(async u => await User.create(u));
  for (const u of users) {
    await User.create(u);
  }
  for (const s of system) {
    await System.create(s);
  }

  for (const f of functionality) {
    await Functionality.create(f);
  }

  for (const sp of systemProfile) {
    await SystemProfile.create(sp);
  }

  for (const pf of profileFunctionality) {
    await ProfileFunctionality.create(pf);
  }

  for (const uac of userAccessControl) {
    await UserAccessControl.create(uac);
  }

  console.log("print when finish it.");
});

// let arrayFunc = users.map(u => User.create(u));
// for (const fn of arrayFunc) {
//   console.log(fn);
//   console.log(arrayFunc);
//   await fn(); // call function to get returned Promise
// }

// sequelize.sync({ force: true }).then(() => {
//   Promise.all(system.map(async s => await System.create(s)));
// });

// sequelize.sync({ force: true }).then(async () => {
//   Promise.all(functionality.map(f => await Functionality.create(f)));
// });

// sequelize.sync({ force: true }).then(async () => {
//   await users.map(user => User.create(user));
//   setTimeout(async () => {
//     await system.map(s => System.create(s));
//     await systemProfile.map(sp => SystemProfile.create(sp));
//     await functionality.map(f => Functionality.create(f));
//     await profileFunctionality.map(pf => ProfileFunctionality.create(pf));
//     await userAccessControl.map(uac => UserAccessControl.create(uac));
//   }, 300);
// });
