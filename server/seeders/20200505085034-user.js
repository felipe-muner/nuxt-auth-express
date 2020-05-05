"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("User", [
      {
        email: "felipe.muner@gmail.com",
        password: "12345678",
        name: "Felipe Cunha Muner",
        dateOfBirth: "1990-03-07"
      },
      {
        email: "felipe.muner2@gmail.com",
        password: "12345678",
        name: "Felipe Cunha Muner 2",
        dateOfBirth: "1990-03-07"
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User", null, {});
  }
};

// module.exports = {
// up: (queryInterface, Sequelize) => {
/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
// },

// down: (queryInterface, Sequelize) => {
/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
// }
// };
