const sequelize = require('sequelize');
const database = require('../../index.js');

const PropertySummary = require('./summary');

const PropertySchools = database.define(
  'PropertySchools',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
      default: 'school',
      validate: {
        isNumeric: true,
      }
    },
    score: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true,
      }
    },
    grades: {
      type: sequelize.STRING,
      allowNull: false,
      default: 'K-5',
      validate: {
        isNumeric: true,
      }
    },
    students: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true
      }
    },
    distance: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: 0.0,
      validate: {
        isNumeric: true
      }
    },
    reviews_score: {
      type: sequelize.FLOAT,
      allowNull: false,
      default: 0.0,
      validate: {
        isNumeric: true,
      }
    },
    reviews_count: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        isNumeric: true,
      }
    },
    type: {
      type: sequelize.STRING,
      allowNull: false,
      default: 'public',
      validate: {
        isNumeric: true,
        isIn: [['public', 'private']]
      }
    },
    category: {
      type: sequelize.STRING,
      allowNull: false,
      default: 'elementary',
      validate: {
        isNumeric: true,
        isIn: [['elementary', 'middle', 'high']]
      }
    },
  },
  {
    timestamp: true
  }
)

PropertySummary.hasMany(PropertySchools);

PropertySchools.sync()
  .then(() => {
    console.log('User database synced')
  })
  .catch((err) => {
    console.error(err)
  })

module.exports = PropertySchools;
