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
      Clinic.belongsTo(models.Doctor_Clinic_Specialty, { foreignKey: 'id', targetKey: 'clinicId', as: 'clinicData' })
      Clinic.hasMany(models.Post, { foreignKey: 'clinicId', as: 'clinicPostData' })
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