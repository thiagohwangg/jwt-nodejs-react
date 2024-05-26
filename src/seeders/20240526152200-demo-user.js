'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     
    */

    await queryInterface.bulkInsert('User', [{
      email: 'John Doe',
      password: 'John Doe',
      username: 'John Doe',
    },
    {
      email: 'John Doe2',
      password: 'John Doe2',
      username: 'John Doe2',
    },
    {
      email: 'John Doe3',
      password: 'John Doe3',
      username: 'John Doe3',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
