'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fNameVi: {
        type: Sequelize.STRING
      },
      fNameEn: {
        type: Sequelize.STRING
      },
      lNameVi: {
        type: Sequelize.STRING
      },
      lNameEn: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      addressVi: {
        type: Sequelize.STRING
      },
      addressEn: {
        type: Sequelize.STRING
      },
      phoneNo: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING,
        references: {
          model: 'Allcodes',
          key: 'key'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      image: {
        type: Sequelize.STRING
      },
      roleId: {
        type: Sequelize.STRING,
        references: {
          model: 'Allcodes',
          key: 'key'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      positionId: {
        type: Sequelize.STRING,
        references: {
          model: 'Allcodes',
          key: 'key'
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
    await queryInterface.dropTable('Users');
  }
};