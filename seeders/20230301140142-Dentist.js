
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
    await queryInterface.bulkInsert('Dentists', [
      {id: 1,user_id : 1, speciality_id : 1, name: "adrian", surname: "solsona", email: "akshdgjadg@gmail.com", address : "av amalio", registration_number : "87007321", phone: "908765432", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
      {id: 2,user_id : 1, speciality_id : 1, name: "adrianan", surname: "solsonan", email: "akshasddgjadg@gmail.com", address : "av amalioet", registration_number : "87007387", phone: "908765452", createdAt: "2023-02-22 00:00:00", updatedAt: "2023-02-22 00:00:00"},
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
