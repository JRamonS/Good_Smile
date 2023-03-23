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
        user_id : 1,
        dentist_id: 1,
        treatment_id : 1,
        hour: "18:00",
        status: "pending",
        observations: "hola que tal",
        date: "2021/09/12", 
        createdAt: "2023-02-22 00:00:00", 
        updatedAt: "2023-02-22 00:00:00"
      },
      {id: 2,
        user_id : 3,
        dentist_id: 2,
        treatment_id : 2,
        hour: "18:50",
        status: "complete",
        observations: "hola que tal como te va",
        date: "2021/09/07", 
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
