'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class TicketUser extends Model{}
  TicketUser.init({
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    CodeBooking : DataTypes.STRING
  }, {sequelize,modelName:'TicketUser'});
  TicketUser.associate = function(models) {
    // associations can be defined here
  };
  return TicketUser;
};