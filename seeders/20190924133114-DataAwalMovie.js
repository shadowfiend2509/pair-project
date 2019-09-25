'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies',[
      {
        name : 'Mission Impossible',
        price : 45000,
        seats : 20,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'TED 2',
        price : 40000,
        seats : 20,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Fast & Forious 9',
        price : 55000,
        seats : 25,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Annabelle',
        price : 40000,
        seats : 20,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'IT',
        price : 50000,
        seats : 20,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Joker',
        price : 50000,
        seats : 20,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'The Avengers:End Game',
        price : 60000,
        seats : 30,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Titanic',
        price : 35000,
        seats : 20,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Johnny English',
        price : 50000,
        seats : 20,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : 'Alladin',
        price : 45000,
        seats : 20,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies',{})
  }
};
