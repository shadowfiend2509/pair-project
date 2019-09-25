'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class User extends Model {}
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    saldo: DataTypes.INTEGER
  }, {sequelize,modelName:'User'});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Movie,{through:models.TicketUser})
  };
  return User;
};