'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('patients', [{
      name: 'Oliver',
      floor: 1,
      available: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Harry',
      floor: 2,
      available: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'George',
      floor: 3,
      available: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Noah',
      floor: 3,
      available: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jack',
      floor: 1,
      available: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jacob',
      floor: 4,
      available: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Leo',
      floor: 5,
      available: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Oscar',
      floor: 1,
      available: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Charlie',
      floor: 2,
      available: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Muhammad',
      floor: 3,
      available: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Olivia',
      floor: 2,
      available: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Amelia',
      floor: 2,
      available: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Isla',
      floor: 3,
      available: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ava',
      floor: 4,
      available: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Emily',
      floor: 3,
      available: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Isabella',
      floor: 2,
      available: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mia',
      floor: 1,
      available: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Poppy',
      floor: 4,
      available: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ella',
      floor: 3,
      available: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Lily',
      floor: 2,
      available: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('patients', null, {});
  }
};
