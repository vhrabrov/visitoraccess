'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('surveys', [{
      description: '',
      positiveAnswer: false,
      title: 'Do you have a cough?',
      index: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      description: '',
      positiveAnswer: false,
      title: 'Do you have a fever?',
      index: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      description: '',
      positiveAnswer: false,
      title: 'Have you been in contact with someone who has been diagnosed with COVID-19?',
      index: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('surveys', null, {});
  }
};
