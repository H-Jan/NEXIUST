const sequelize = require('sequelize');
const database = require('../../index.js');

const PropertySummary = require('./summary');

const PropertyValue = database.define(
  'PropertyValue',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    current_value: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true,
      }
    },
    estimated_value_year: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true,
      }
    },
    estimate_value_five_year: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true
      }
    },
    estimated_value_max: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true,
      }
    },
    estimated_value_min: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true
      }
    },
  },
  {
    timestamp: true
  }
)

PropertySummary.hasOne(PropertyValue);

PropertyValue.sync()
  .then(() => {
    console.log('User database synced')
  })
  .catch((err) => {
    console.error(err)
  })

module.exports = PropertyValue;
