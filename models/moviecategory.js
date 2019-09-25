'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class MovieCategory extends Model {};
  MovieCategory.init({
    MovieId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {sequelize,modelName:'MovieCategory'});
  MovieCategory.associate = function(models) {
    // associations can be defined here
  };
  return MovieCategory;
};