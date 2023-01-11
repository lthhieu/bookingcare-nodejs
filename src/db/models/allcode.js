'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Allcode.hasMany(models.User, { foreignKey: 'positionId', as: 'positionData' })
      Allcode.hasMany(models.User, { foreignKey: 'genderId', as: 'genderData' })
      Allcode.hasMany(models.User, { foreignKey: 'roleId', as: 'roleData' })
      Allcode.hasMany(models.Booking, { foreignKey: 'statusId', as: 'statusBookingData' })
      Allcode.hasMany(models.Booking, { foreignKey: 'time', as: 'timeBookingData' })
      Allcode.hasMany(models.Schedule, { foreignKey: 'time', as: 'timeScheduleData' })
    }
  }
  Allcode.init({
    keyMap: DataTypes.STRING,
    type: DataTypes.STRING,
    valueEn: DataTypes.STRING,
    valueVi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Allcode',
  });
  return Allcode;
};