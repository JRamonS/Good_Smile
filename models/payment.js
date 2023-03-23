'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.belongsTo(models.Treatment, {
        foreignKey: 'treatment_id'
      });
    }
  }
  Payment.init({
    treatment_id : DataTypes.INTEGER,
    note: DataTypes.TEXT,
    date: DataTypes.DATE,
    amount: DataTypes.FLOAT,
    payment_method: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};