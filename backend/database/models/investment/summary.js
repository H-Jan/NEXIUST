const sequelize = require('sequelize');
const database = require('../../index.js');

const PropertySummary = require('../property/summary.js');
const UserCredentials = require('../users/credentials.js');


const InvestmentSummary = database.define(
  'InvestmentSummary',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    inv_amount: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true,
      }
    },
    expenses: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true,
      }
    },
    revenue: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true
      }
    },
    gain_on_inv: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true,
      }
    },
    cost_of_inv: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true
      }
    },
    return_on_inv: {
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

PropertySummary.hasOne(InvestmentSummary);
UserCredentials.hasOne(InvestmentSummary)


InvestmentSummary.sync()
  .then(() => {
    console.log('User database synced')
  })
  .catch((err) => {
    console.error(err)
  })

module.exports = InvestmentSummary;
