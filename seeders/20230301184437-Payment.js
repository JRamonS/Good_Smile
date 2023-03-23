'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Payments', [
      {id: 1, treatment_id : 1,
        note: "esto son las notas del pago en efectivo",
        date: "2021/09/04",
        amount: 100,
        payment_method: "efectivo",
        createdAt: "2023-02-22 00:00:00",
        updatedAt: "2023-02-22 00:00:00"},

      {id: 2, treatment_id : 2,
        note: "esto son las notas del pago con tarjeta",
        date: "2021/02/28",
        amount: 205,
        payment_method:"tarjeta",
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
