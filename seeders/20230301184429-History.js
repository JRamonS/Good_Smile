'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Histories', [
      {id: 1,
        pacient_id : 1,
        date: "27/06/2021",
        observation: "donde estas",
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"},
      {id: 2,
        pacient_id : 1,
        date: "20/09/2021",
        observation: "estoy fuera",
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"}
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
