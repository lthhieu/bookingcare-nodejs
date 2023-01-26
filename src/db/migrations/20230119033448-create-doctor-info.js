'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Doctor_Infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      priceId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Allcodes',
          key: 'keyMap'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      provinceId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Allcodes',
          key: 'keyMap'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      paymentId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Allcodes',
          key: 'keyMap'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      nameClinicVi: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nameClinicEn: {
        allowNull: false,
        type: Sequelize.STRING
      },
      addressClinicVi: {
        allowNull: false,
        type: Sequelize.STRING
      },
      addressClinicEn: {
        allowNull: false,
        type: Sequelize.STRING
      },
      noteVi: {
        type: Sequelize.STRING
      },
      noteEn: {
        type: Sequelize.STRING
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
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
    await queryInterface.dropTable('Doctor_Infos');
  }
};