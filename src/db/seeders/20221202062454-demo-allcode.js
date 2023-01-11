'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Allcodes', [{
      keyMap: 'R1',
      type: 'role',
      valueEn: 'Admin',
      valueVi: 'Người quản trị',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'R2',
      type: 'role',
      valueEn: 'Doctor',
      valueVi: 'Bác sĩ',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'R3',
      type: 'role',
      valueEn: 'Patient',
      valueVi: 'Bệnh nhân',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'S1',
      type: 'status',
      valueEn: 'New',
      valueVi: 'Lịch hẹn mới',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'S2',
      type: 'status',
      valueEn: 'Confirmed',
      valueVi: 'Đã xác nhận',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'S3',
      type: 'status',
      valueEn: 'Done',
      valueVi: 'Đã khám xong',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'S4',
      type: 'status',
      valueEn: 'Canceled',
      valueVi: 'Đã hủy',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'T1',
      type: 'time',
      valueEn: '7:00 - 8:00 Morning',
      valueVi: '7:00 - 8:00 Sáng',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'T2',
      type: 'time',
      valueEn: '8:00 - 9:00 Morning',
      valueVi: '8:00 - 9:00 Sáng',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'T3',
      type: 'time',
      valueEn: '9:00 - 10:00 Morning',
      valueVi: '9:00 - 10:00 Sáng',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'T4',
      type: 'time',
      valueEn: '10:00 - 11:00 Morning',
      valueVi: '10:00 - 11:00 Sáng',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'T5',
      type: 'time',
      valueEn: '13:00 - 14:00 Afternoon',
      valueVi: '13:00 - 14:00 Chiều',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'T6',
      type: 'time',
      valueEn: '14:00 - 15:00 Afternoon',
      valueVi: '14:00 - 15:00 Chiều',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'T7',
      type: 'time',
      valueEn: '15:00 - 16:00 Afternoon',
      valueVi: '15:00 - 16:00 Chiều',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'T8',
      type: 'time',
      valueEn: '16:00 - 17:00 Afternoon',
      valueVi: '16:00 - 17:00 Chiều',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'P1',
      type: 'position',
      valueEn: 'Doctor',
      valueVi: 'Bác sĩ',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'P2',
      type: 'position',
      valueEn: 'Master',
      valueVi: 'Thạc sĩ',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'P3',
      type: 'position',
      valueEn: 'Dr.Phil',
      valueVi: 'Tiến sĩ',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'P4',
      type: 'position',
      valueEn: 'Associate Professor',
      valueVi: 'Phó giáo sư',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'P5',
      type: 'position',
      valueEn: 'Professor',
      valueVi: 'Giáo sư',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'M',
      type: 'gender',
      valueEn: 'Male',
      valueVi: 'Nam',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'F',
      type: 'gender',
      valueEn: 'Female',
      valueVi: 'Nữ',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      keyMap: 'O',
      type: 'gender',
      valueEn: 'Other',
      valueVi: 'Khác',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Allcodes', null, {});
  }
};
