'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_Info extends Model {
    static associate(models) {
      Doctor_Info.belongsTo(models.User, { foreignKey: 'doctorId', targetKey: 'id', as: 'doctorInfoData' })
      Doctor_Info.belongsTo(models.Allcode, { foreignKey: 'priceId', targetKey: 'keyMap', as: 'priceDoctorData' })
      Doctor_Info.belongsTo(models.Allcode, { foreignKey: 'provinceId', targetKey: 'keyMap', as: 'provinceData' })
      Doctor_Info.belongsTo(models.Allcode, { foreignKey: 'paymentId', targetKey: 'keyMap', as: 'paymentData' })
      // Doctor_Info.belongsTo(models.Specialty, { foreignKey: 'specialtyId', targetKey: 'id', as: 'doctorInfoSpecialtyData' })
      // Doctor_Info.belongsTo(models.Clinic, { foreignKey: 'clinicId', targetKey: 'id', as: 'doctorInfoClinicData' })

    }
  }
  Doctor_Info.init({
    doctorId: DataTypes.INTEGER,
    // specialtyId: DataTypes.INTEGER,
    // clinicId: DataTypes.INTEGER,

    priceId: DataTypes.STRING,
    provinceId: DataTypes.STRING,
    paymentId: DataTypes.STRING,
    nameClinicVi: DataTypes.STRING,
    nameClinicEn: DataTypes.STRING,
    addressClinicVi: DataTypes.STRING,
    addressClinicEn: DataTypes.STRING,
    noteVi: DataTypes.STRING,
    noteEn: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Doctor_Info',
  });
  return Doctor_Info;
};