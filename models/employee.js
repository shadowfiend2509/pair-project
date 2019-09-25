'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Employee extends Model {}
  Employee.init({
    userName: DataTypes.STRING,
    pasword: DataTypes.STRING,
    role: DataTypes.STRING,
    loginStatus: DataTypes.INTEGER
  }, {sequelize,modelName:'Employee'});
  Employee.associate = function(models) {
    // associations can be defined here
  };
  return Employee;
};