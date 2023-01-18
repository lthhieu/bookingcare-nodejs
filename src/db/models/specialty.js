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
      Specialty.belongsTo(models.Doctor_Clinic_Specialty, { foreignKey: 'id', targetKey: 'specialtyId', as: 'specialtyData' })
      Specialty.hasOne(models.Post, { foreignKey: 'specialtyId', as: 'specialtyPostData' })
    }
  }
  Specialty.init({
    nameVi: DataTypes.STRING,
    nameEn: DataTypes.STRING,
    descriptionVi: DataTypes.TEXT,
    descriptionEn: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Specialty',
  });
  return Specialty;
};