"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("CategoriesLocations", [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 1,
        locationId: 1
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 1,
        locationId: 2
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 2,
        locationId: 3
      },
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 3,
        locationId: 3
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
