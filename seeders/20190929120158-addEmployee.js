'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employees',[
      {
        userName : 'sudhartioeric',
        pasword : 'shadowfiend',
        role : 'manager',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Employees',{})
  }
};
