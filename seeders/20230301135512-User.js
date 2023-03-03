
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Users', [
      {id: 1,username: "Alyna", password : "788769988", email: "alyna@gmail.com", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00", rol_id: 1},
      {id: 2,username: "Ignacio", password : "734786493", email: "ignacio@gmail.com", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00", rol_id: 2},
 
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
