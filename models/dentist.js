'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dentist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dentist.hasMany(models.Appointment, {
        foreignKey: 'dentist_id'
      });

      Dentist.belongsTo(models.Speciality, {
        foreignKey: 'speciality_id'
      });
    }
  }
  Dentist.init({
    user_id : DataTypes.INTEGER,
    speciality_id: DataTypes.INTEGER,
    registration_number: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Dentist',
  });
  return Dentist;
};