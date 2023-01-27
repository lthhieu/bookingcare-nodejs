'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Specialty.hasOne(models.Post, { foreignKey: 'specialtyId', as: 'specialtyPostData' })
      // Specialty.hasMany(models.Doctor_Info, { foreignKey: 'specialtyId', as: 'doctorInfoSpecialtyData' })
      Specialty.hasOne(models.Doctor_Clinic_Specialty, { foreignKey: 'specialtyId', as: 'specialtyData' })

    }
  }
  Specialty.init({
    nameVi: DataTypes.STRING,
    nameEn: DataTypes.STRING,
    contentHtmlEn: DataTypes.TEXT('long'),
    contentHtmlVi: DataTypes.TEXT('long'),
    contentMarkDownEn: DataTypes.TEXT('long'),
    contentMarkDownVi: DataTypes.TEXT('long'),
    image: DataTypes.BLOB('long')
  }, {
    sequelize,
    modelName: 'Specialty',
  });
  return Specialty;
};