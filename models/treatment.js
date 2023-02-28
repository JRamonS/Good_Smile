'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treatment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Treatment.hasMany(models.Payment, {
        foreignKey: 'treatment_id'
      });

      Treatment.hasMany(models.Appointment, {
        foreignKey: 'treatment_id'
      });
    }
  }
  Treatment.init({
    name: DataTypes.STRING,
    duration: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    date: DataTypes.STRING,
    session_num: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Treatment',
  });
  return Treatment;
};