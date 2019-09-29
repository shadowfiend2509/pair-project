'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Employees',[
      {
        username : 'sudhartioeric',
        password : 'shadowfiend',
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
