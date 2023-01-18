'use strict';
const bcrypt = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      fNameVi: 'Lý Trần Hoàng',
      fNameEn: 'Ly Tran Hoang',
      lNameVi: 'Hiếu',
      lNameEn: 'Hieu',
      email: '19004060@st.vlute.edu.vn',
      password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
      addressVi: 'Vĩnh Long',
      addressEn: 'Vinh Long',
      phoneNo: '0794374673',
      genderId: 'M',
      image: '',
      roleId: 'R1',
      positionId: 'P5',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fNameVi: 'Nguyễn Thị Hồng',
      fNameEn: 'Nguyen Thi Hong',
      lNameVi: 'Gấm',
      lNameEn: 'Gam',
      email: '18004180@student.vlute.edu.vn',
      password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
      addressVi: 'Tam Bình',
      addressEn: 'Tam Binh',
      phoneNo: '',
      genderId: 'F',
      image: '',
      roleId: 'R1',
      positionId: 'P4',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
