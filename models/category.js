'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Category extends Model{};
  Category.init({
    name: DataTypes.STRING
  }, {sequelize,modelName:'Category'});
  Category.associate = function(models) {
    Category.belongsToMany(models.Movie, {through:models.MovieCategory});
  };
  return Category;
};