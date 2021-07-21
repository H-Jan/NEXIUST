const sequelize = require('sequelize');
const database = require('../../index.js');

const PropertySummary = require('./summary');

const PropertyAgency = database.define(
  'PropertyAgency',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    agent_name: {
      type: sequelize.STRING,
      allowNull: false,
      default: 'John Doe',
      validate: {
        isApha: true
      }
    },
    agent_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 00000000,
      validate: {
        isNumeric: false,
      }
    },
    broker_name: {
      type: sequelize.STRING,
      allowNull: false,
      default: 'Realty',
      validate: {
        isApha: true
      }
    },
    broker_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 00000000,
      validate: {
        isNumeric: true
      }
    },
    mls_name: {
      type: sequelize.STRING,
      allowNull: false,
      default: 'ocmls',
      validate: {
        isApha: true
      }
    },
    mls_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 00000000,
      validate: {
        isNumeric: true
      }
    },
  },
  {
    timestamp: true
  }
)

PropertySummary.hasOne(PropertyAgency);

PropertyAgency.sync()
  .then(() => {
    console.log('User database synced')
  })
  .catch((err) => {
    console.error(err)
  })

module.exports = PropertyAgency;
