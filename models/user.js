'use strict';
const hash = require('../helper/password')
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class User extends Model {}
  User.init({
    username: {
      type : DataTypes.STRING,
      allowNull : false
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false
    },
    email: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    saldo: DataTypes.INTEGER,
    salt:DataTypes.STRING,
    loginStatus :DataTypes.INTEGER
  }, {sequelize,modelName:'User',
    hooks : {
      beforeCreate(instance, options){
        // console.log('=========instance========='+JSON.stringify(instance))
        const random = String(Math.random()*100000);
        const hashPassword = hash.hashPasword(instance.password,random)
        // console.log('========hash=====',hashPassword)
        // console.log('===salt ===',random)
        instance.password = hashPassword;
        instance.salt = random;
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Movie,{through:models.TicketUser})
  };
  return User;
};