'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clinics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameVi: {
        type: Sequelize.STRING
      },
      nameEn: {
        type: Sequelize.STRING
      },
      addressVi: {
        type: Sequelize.STRING
      },
      addressEn: {
        type: Sequelize.STRING
      },
      descriptionVi: {
        type: Sequelize.TEXT
      },
      descriptionEn: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Clinics');
  }
};