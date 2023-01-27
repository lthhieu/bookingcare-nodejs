'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Clinic.hasOne(models.Post, { foreignKey: 'clinicId', as: 'clinicPostData' })
      // Clinic.hasMany(models.Doctor_Info, { foreignKey: 'clinicId', as: 'doctorInfoClinicData' })
      Clinic.hasOne(models.Doctor_Clinic_Specialty, { foreignKey: 'clinicId', as: 'clinicData' })
    }
  }
  Clinic.init({
    nameVi: DataTypes.STRING,
    nameEn: DataTypes.STRING,
    addressVi: DataTypes.STRING,
    addressEn: DataTypes.STRING,
    descriptionVi: DataTypes.TEXT,
    descriptionEn: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clinic',
  });
  return Clinic;
};