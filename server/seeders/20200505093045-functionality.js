"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Functionality", [
      {
        father_id: null,
        name: "General Register",
        action: "/general-register",
        icon: "form-textbox-password",
        system_id: 1,
        priority: 1,
        active: true
      },
      {
        father_id: 1,
        name: "CEO",
        action: "/general-register/ceo",
        icon: "form-textbox-password",
        system_id: 1,
        priority: 1,
        active: true
      },
      {
        father_id: 1,
        name: "Manager",
        action: "/general-register/manager",
        icon: "form-textbox-password",
        system_id: 1,
        priority: 2,
        active: true
      },
      {
        father_id: 1,
        name: "Seller",
        action: "/general-register/seller",
        icon: "form-textbox-password",
        system_id: 1,
        priority: 3,
        active: true
      },
      {
        father_id: null,
        name: "Procedure",
        action: "/procedure",
        icon: "form-textbox-password",
        system_id: 1,
        priority: 1,
        active: true
      },
      {
        father_id: 5,
        name: "Sale",
        action: "/procedure/sale",
        icon: "form-textbox-password",
        system_id: 1,
        priority: 1,
        active: true
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Functionality", null, {});
  }
};
