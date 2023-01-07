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
    gender: DataTypes.STRING,
    image: DataTypes.STRING,
    roleId: DataTypes.STRING,
    positionId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};