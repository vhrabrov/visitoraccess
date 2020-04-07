'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('rules', [{
      title: 'Rule 1',
      text: 'Patient may have only one visitor at a time.',
      index: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Rule 2',
      text: 'Please respect social distancing guidelines.',
      index: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Rule 3',
      text: 'Only patients wearing a mask and gloves are allowed.',
      index: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('rules', null, {});
  }
};
