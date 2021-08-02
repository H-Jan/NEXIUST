const sequelize = require('sequelize');
const database = require('../../index.js');

const PropertySummary = require('./summary');

const PropertyFeatures = database.define(
  'PropertyFeatures',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: sequelize.STRING,
      allowNull: false,
      default: 'Single Family',
      validate: {
        isAlpha: true,
      }
    },
    year_built: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 2021,
      validate: {
        isNumeric: true,
      }
    },
    stories: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 1,
      validate: {
        isNumeric: true
      }
    },
    parking: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 1,
      validate: {
        isNumeric: false,
      }
    },
    heating: {
      type: sequelize.STRING,
      allowNull: false,
      default: 'Central',
      validate: {
        isAlpha: true,
      }
    },
    cooling: {
      type: sequelize.STRING,
      allowNull: false,
      default: 'Central',
      validate: {
        isApha: true,
      }
    },
  },
  {
    timestamp: true
  }
)

PropertySummary.hasOne(PropertyFeatures);

PropertyFeatures.sync()
  .then(() => {
    //console.log('User database synced')
  })
  .catch((err) => {
    console.error(err)
  })

module.exports = PropertyFeatures;
