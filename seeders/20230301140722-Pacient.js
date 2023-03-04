
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Pacients', [
      {id: 1, user_id: 1,
        name: "Alyna",
        surname: "solso",
        email: "alyna@gmail.com",
        address: "Av maeia",
        phone: "76858594",
        date_of_birth: "07/10/2020",
        gender: "male",
        postcode: "12005", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},

      {id: 2, user_id: 5,
      name: "jaime",
      surname: "solsoneitor",
      email: "lkakaasdddsxñ@gmail.com",
      address: "Av maria",
      phone: "768588384",
      date_of_birth: "07/10/2023",
      gender: "male",
      postcode: "12004", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"}
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
