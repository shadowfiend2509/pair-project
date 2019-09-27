'use strict';
const hash = require('../helper/password')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Employee extends Model {}
  Employee.init({
    userName: DataTypes.STRING,
    pasword: DataTypes.STRING,
    role: DataTypes.STRING,
    loginStatus: DataTypes.INTEGER,
    salt : DataTypes.STRING
  }, {sequelize,modelName:'Employee',
  hooks : {
    beforeCreate(instance, options){
      const random = String(Math.random()*100000);
      console.log('=======instance====',instance.dataValues)
      const hashPassword = hash.hashPasword(instance.dataValues.pasword,random)
      instance.dataValues.pasword = hashPassword;
      instance.dataValues.salt = random;
      instance.dataValues.loginStatus = 0
      console.log(hashPassword)
    }
  }});
  Employee.associate = function(models) {
    // associations can be defined here
  };
  return Employee;
};