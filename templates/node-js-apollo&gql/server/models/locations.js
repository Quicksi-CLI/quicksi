"use strict";
module.exports = (sequelize, DataTypes) => {
  var Locations = sequelize.define("Locations", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    updatedAt: DataTypes.INTEGER,
    createdAt: DataTypes.INTEGER,
    name: DataTypes.STRING
  });
  Locations.associate = function(models) {
    Locations.belongsToMany(models.Categories, {
      through: "CategoriesLocations",
      foreignKey: "locationId"
    });
  };

  return Locations;
};
