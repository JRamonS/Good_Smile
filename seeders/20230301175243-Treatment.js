
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Treatments', [
      {id: 1, name: "quita muelas",
        duration: "2 horas",
        price: 1000,
        description: "muy doloroso",
        date: "28/09/2021",
        session_num: 2,
        status: "pending", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
        {id: 2, name: "quita empastes",
        duration: "9 horas",
        price: 2000,
        description: "muchas caries",
        date: "18/07/2021",
        session_num: 4,
        status: "complete", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"}
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
