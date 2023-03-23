'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Appointments', [
      {id: 1,
        pacient_id : 1,
        dentist_id: 1,
        treatment_id : 1,
        hour: "18:00",
        status: "pending",
        observations: "hola que tal",
        date: "18/09/2018", 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {id: 2,
        pacient_id : 3,
        dentist_id: 2,
        treatment_id : 2,
        hour: "18:50",
        status: "complete",
        observations: "hola que tal como te va",
        date: "18/10/2018", 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      }
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
