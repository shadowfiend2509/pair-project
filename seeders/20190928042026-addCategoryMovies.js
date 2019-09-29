'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MovieCategories',[
      {
        MovieId : 17,
        CategoryId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        MovieId : 22,
        CategoryId : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        MovieId : 18,
        CategoryId : 6 ,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        MovieId : 18,
        CategoryId :4 ,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        MovieId : 19,
        CategoryId : 1 ,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        MovieId : 16,
        CategoryId :3 ,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        MovieId : 16,
        CategoryId :5 ,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        MovieId : 23,
        CategoryId :1 ,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        MovieId : 17,
        CategoryId :5 ,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        MovieId : 24,
        CategoryId :2 ,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        MovieId : 25,
        CategoryId :4 ,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        MovieId : 22,
        CategoryId :1 ,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        MovieId : 26,
        CategoryId :4 ,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        MovieId : 26,
        CategoryId : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        MovieId : 25,
        CategoryId :1 ,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        MovieId : 20,
        CategoryId :3 ,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        MovieId : 29,
        CategoryId : 6,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        MovieId : 11,
        CategoryId :2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MovieCategories',{})
  }
};
