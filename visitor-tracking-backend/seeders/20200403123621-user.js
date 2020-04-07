'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      login: 'doe',
      username: 'John Doe',
      password: '202cb962ac59075b964b07152d234b70',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      login: 'smith',
      username: 'John Smith',
      password: '202cb962ac59075b964b07152d234b70',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
