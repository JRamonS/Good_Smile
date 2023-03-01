'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pacient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pacient.hasMany(models.Appointment, {
        foreignKey: 'pacient_id'
      });

      Pacient.hasOne(models.History,{
        foreignKey : "pacient_id"
      });
    }
  }
  Pacient.init({
    user_id : DataTypes.INTEGER,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    date_of_birth: DataTypes.STRING,
    gender: DataTypes.STRING,
    postcode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pacient',
  });
  return Pacient;
};