const sequelize = require('sequelize');
const database = require('../../index.js');

const InvestmentSummary = require('./summary.js');


const InvestmentAssessment = database.define(
  'InvestmentAssessment',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
        isNumeric: true,
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
    cash_flow: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true,
      }
    },
    total_return_percent: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true
      }
    },
    capitalization_rate: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true
      }
    },
    price_to_rent_ratio: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true
      }
    },
    price_to_income_ratio: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true
      }
    },
    gross_rental_yield: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true
      }
    },
    net_operating_income: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true
      }
    },
    internal_rate_of_return: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true
      }
    },
    occupancy_rate: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true,
      }
    },
  },
  {
    timestamp: true
  }
)

InvestmentSummary.hasOne(InvestmentAssessment);


InvestmentAssessment.sync()
  .then(() => {
    //console.log('User database synced')
  })
  .catch((err) => {
    console.error(err)
  })

module.exports = InvestmentAssessment;
