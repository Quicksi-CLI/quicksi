"use strict";
module.exports = (sequelize, DataTypes) => {
  var Categories = sequelize.define("Categories", {
    name: DataTypes.STRING,
    updatedAt: DataTypes.INTEGER,
    createdAt: DataTypes.INTEGER,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  });
  Categories.associate = function(models) {
    Categories.belongsToMany(models.Locations, {
      through: "CategoriesLocations",
      foreignKey: "categoryId"
    });
  };
  return Categories;
};
