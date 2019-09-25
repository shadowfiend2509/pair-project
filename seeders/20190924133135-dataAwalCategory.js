'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories',[
      {
        name : 'Action',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Romance',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Horror',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Comedy',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Thriller',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : '18+',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories',{})
  }
};
