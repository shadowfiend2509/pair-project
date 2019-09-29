'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies',[
      {
        name : 'Mission Impossible',
        price : 45000,
        seats : 20,
        createdAt : new Date(),
        updatedAt : new Date(),
        description : "The show's Jim Phelps is the leader of the 'Impossible Missions Force.'"
      },
      {
        name : 'TED 2',
        price : 40000,
        seats : 20,
        createdAt : new Date(),
        updatedAt : new Date(),
        description : "The film stars Mark Wahlberg and MacFarlane, and follows the talking teddy bear Ted as he fights for civil rights in order to be recognized as a person."
      },
      {
        name : 'Fast & Forious 9',
        price : 55000,
        seats : 25,
        createdAt : new Date(),
        updatedAt : new Date(),
        description : "Originally set for release in April 2019, Fast 9 was pushed to May 22."
      },
      {
        name : 'Annabelle',
        price : 40000,
        seats : 20,
        createdAt : new Date(),
        updatedAt : new Date(),
        description : "It is a prequel to 2013's The Conjuring and the second installment in the Conjuring Universe franchise."
      },
      {
        name : 'IT',
        price : 50000,
        seats : 20,
        createdAt : new Date(),
        updatedAt : new Date(),
        description : "After recent cases of disappearing local kids in the town of Derry, Maine, IT follows a group of kids dubbed \"The Losers\' Club\" in the summer."
      },
      {
        name : 'Joker',
        price : 50000,
        seats : 20,
        createdAt : new Date(),
        updatedAt : new Date(),
        description : "The Joker is a homicidal, psychopathic, ruthless, sadistic, maniacal, lunatic, manipulative, intelligent and diabolical master criminal who wants nothing but chaos and anarchy wherever he goes, as well as reveling in the suffering of others."
      },
      {
        name : 'The Avengers:End Game',
        price : 60000,
        seats : 30,
        createdAt : new Date(),
        updatedAt : new Date(),
        description : "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films, Avengers: Endgame."
      },
      {
        name : 'Titanic',
        price : 35000,
        seats : 20,
        createdAt : new Date(),
        updatedAt : new Date(),
        description : "The RMS Titanic, billed as unsinkable, sinks into the icy waters of the North Atlantic after hitting an iceberg on its maiden voyage."
      },
      {
        name : 'Johnny English',
        price : 50000,
        seats : 20,
        createdAt : new Date(),
        updatedAt : new Date(),
        description : "Sir Johnny English is a fictional MI7 intelligence operative who serves as the titular main protagonist of the Johnny English franchise."
      },
      {
        name : 'Alladin',
        price : 45000,
        seats : 20,
        createdAt : new Date(),
        updatedAt : new Date(),
        description : "A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true."
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies',{});
  }
};
