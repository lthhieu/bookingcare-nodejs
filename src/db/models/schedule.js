'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.belongsTo(models.Allcode, { foreignKey: 'time', targetKey: 'keyMap', as: 'timeScheduleData' })
      Schedule.belongsTo(models.User, { foreignKey: 'doctorId', targetKey: 'id', as: 'userScheduleDoctorIdData' })

    }
  }
  Schedule.init({
    curNo: DataTypes.INTEGER,
    maxNo: DataTypes.INTEGER,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    doctorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};