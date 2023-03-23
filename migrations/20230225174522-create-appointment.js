'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      },
      dentist_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Dentists",
          key: "id"
        }
      },
      treatment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Treatments",
          key: "id"
        }
      },
      hour: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      observations: {
        type: Sequelize.TEXT
      },
      date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};