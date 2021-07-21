const sequelize = require('sequelize');
const database = require('../../index.js');

const PropertySummary = require('./summary');

const PropertyOverview = database.define(
  'PropertyOverview',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    listed_value: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true,
      }
    },
    listed_interval: {
      type: sequelize.STRING,
      allowNull: false,
      default: 'Hours',
      validate: {
        isAlpha: true,
        isIn: [['Hour','Hours','Day','Days','Week','Weeks','Month','Months','Year','Years']]
      }
    },
    views: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true,
      }
    },
    saves: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true,
      }
    },
    description: {
      type: sequelize.TEXT,
      allowNull: false,
      default: '',
      validate: {
        isAlphanumeric: true,
      }
    },
  },
  {
    timestamp: true
  }
)

PropertySummary.hasOne(PropertyOverview);

PropertyOverview.sync()
  .then(() => {
    console.log('User database synced')
  })
  .catch((err) => {
    console.error(err)
  })

module.exports = PropertyOverview;
