"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Food",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Entertainment",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Kids",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  }
};
