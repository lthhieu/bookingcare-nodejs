'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.Allcode, { foreignKey: 'statusId', targetKey: 'keyMap', as: 'statusBookingData' })
      Booking.belongsTo(models.Allcode, { foreignKey: 'time', targetKey: 'keyMap', as: 'timeBookingData' })
      Booking.belongsTo(models.User, { foreignKey: 'doctorId', targetKey: 'id', as: 'userBookingDoctorIdData' })
      Booking.belongsTo(models.User, { foreignKey: 'patientId', targetKey: 'id', as: 'userBookingpatientIdData' })
    }
  }
  Booking.init({
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    statusId: DataTypes.STRING,
    doctorId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};