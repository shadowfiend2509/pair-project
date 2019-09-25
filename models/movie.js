'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Movie extends Model {}
  Movie.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    seats: DataTypes.INTEGER
  }, {sequelize,modelName:'Movie'});
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.belongsToMany(models.Category,{through : models.MovieCategory})
    Movie.belongsToMany(models.User,{through : models.TicketUser})
  };
  return Movie;
};