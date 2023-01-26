'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' })
      User.belongsTo(models.Allcode, { foreignKey: 'genderId', targetKey: 'keyMap', as: 'genderData' })
      User.belongsTo(models.Allcode, { foreignKey: 'roleId', targetKey: 'keyMap', as: 'roleData' })
      User.belongsTo(models.Doctor_Clinic_Specialty, { foreignKey: 'id', targetKey: 'doctorId', as: 'userData' })
      User.hasMany(models.History, { foreignKey: 'doctorId', as: 'userHistorydoctorIdData' })
      User.hasMany(models.History, { foreignKey: 'patientId', as: 'userHistorypatientIdData' })
      User.hasOne(models.Post, { foreignKey: 'doctorId', as: 'userPostData' })
      User.hasMany(models.Schedule, { foreignKey: 'doctorId', as: 'userScheduleDoctorIdData' })
      User.hasMany(models.Booking, { foreignKey: 'doctorId', as: 'userBookingDoctorIdData' })
      User.hasMany(models.Booking, { foreignKey: 'patientId', as: 'userBookingpatientIdData' })
      User.hasOne(models.Doctor_Info, { foreignKey: 'doctorId', as: 'doctorInfoData' })
    }
  }
  User.init({
    fNameVi: DataTypes.STRING,
    fNameEn: DataTypes.STRING,
    lNameVi: DataTypes.STRING,
    lNameEn: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    addressVi: DataTypes.STRING,
    addressEn: DataTypes.STRING,
    phoneNo: DataTypes.STRING,
    genderId: DataTypes.STRING,
    image: DataTypes.BLOB('long'),
    roleId: DataTypes.STRING,
    positionId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};