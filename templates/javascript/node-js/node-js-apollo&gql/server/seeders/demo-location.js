"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Locations",
      [
        {
          name: "Pizza Hut",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Red Lion",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Odeon",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Locations", null, {});
  }
};
