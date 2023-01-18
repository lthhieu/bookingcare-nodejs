'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.Clinic, { foreignKey: 'clinicId', targetKey: 'id', as: 'clinicPostData' })
      Post.belongsTo(models.User, { foreignKey: 'doctorId', targetKey: 'id', as: 'userPostData' })
      Post.belongsTo(models.Specialty, { foreignKey: 'specialtyId', targetKey: 'id', as: 'specialtyPostData' })
    }
  }
  Post.init({
    contentHtmlVi: DataTypes.TEXT('long'),
    contentHtmlEn: DataTypes.TEXT('long'),
    descriptionVi: DataTypes.TEXT('long'),
    descriptionEn: DataTypes.TEXT('long'),
    contentMarkDownVi: DataTypes.TEXT('long'),
    contentMarkDownEn: DataTypes.TEXT('long'),
    doctorId: DataTypes.INTEGER,
    clinicId: DataTypes.INTEGER,
    specialtyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};