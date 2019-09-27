'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Movie extends Model {}
  Movie.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    seats: DataTypes.INTEGER,
    description : DataTypes.STRING
  }, {sequelize,modelName:'Movie',
  hooks : {
    beforeCreate(instance,option){
      instance.price=55000;
    },
    beforeUpdate(instance,option){
      instance.price = 55000
    }
  }});
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.belongsToMany(models.Category,{through : models.MovieCategory})
    Movie.belongsToMany(models.User,{through : models.TicketUser})
  };
  return Movie;
};