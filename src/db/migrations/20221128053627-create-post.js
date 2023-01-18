'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contentHtmlVi: {
        allowNull: false,
        type: Sequelize.TEXT('long')
      },
      contentHtmlEn: {
        allowNull: false,
        type: Sequelize.TEXT('long')
      },
      descriptionVi: {
        type: Sequelize.TEXT('long')
      },
      descriptionEn: {
        type: Sequelize.TEXT('long')
      },
      contentMarkDownVi: {
        allowNull: false,
        type: Sequelize.TEXT('long')
      },
      contentMarkDownEn: {
        allowNull: false,
        type: Sequelize.TEXT('long')
      },
      doctorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      clinicId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clinics',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      specialtyId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Specialties',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    await queryInterface.dropTable('Posts');
  }
};