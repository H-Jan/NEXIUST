const sequelize = require('sequelize');
const database = require('../../index.js');

const PropertySummary = database.define(
  'PropertySummary',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    address_street: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        max: 42,
        isAlphanumeric: true,
      },
    },
    address_city: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        max: 24,
        isAlpha: true,
      },
    },
    address_state: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        max: 24,
        isAlpha: true,
      },
    },
    address_country: {
      type: sequelize.STRING,
      allowNull: false,
      default: 'USA',
      validate: {
        max: 24,
        isAlpha: true,
      },
    },
    address_zip: {
      type: sequelize.INTEGER,
      allowNull: false,
      validate: {
        max: 6,
        isInt: true,
      },
    },
    price: {
      type: sequelize.INTEGER,
      alllowNulll: false,
      validate: {
        isInt: true,
      },
    },
    estimate: {
      type: sequelize.INTEGER,
      alllowNulll: false,
      validate: {
        isInt: true,
      },
    },
    beds: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    baths: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    sqft: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    ref_id: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        len: [8, 10],
        isAlphanumeric: true,
      },
    },
    parcel_number: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    listing_id: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    agent_id: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        len: [7, 9],
        isInt: true,
      },
    },
    days_listed: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    created: {
      type: sequelize.DATEONLY,
      allowNull: false,
      defaultValue: new Date()
    },
  },
  {
    timestamp: true
  }
)

PropertySummary.sync()
  .then(() => {
    //console.log('User database synced')
  })
  .catch((err) => {
    console.error(err)
  })

module.exports = PropertySummary;
