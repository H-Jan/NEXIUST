const sequelize = require('sequelize');
const database = require('../../index.js');

const PropertySummary = require('./summary');

const PropertyHoa = database.define(
  'PropertyHoa',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
      default: 'Home Association',
      validate: {
        isAlpha: true,
      }
    },
    phone: {
      type: sequelize.STRING,
      allowNull: false,
      default: '000-000-0000',
      validate: {
        isAlphanumeric: true,
      }
    },
    price: {
      type: sequelize.INTEGER,
      allowNull: false,
      default: 1,
      validate: {
        isNumeric: true
      }
    },
    term: {
      type: sequelize.STRING,
      allowNull: false,
      default: 'Semi-Annual',
      validate: {
        isAlpha: true,
        isIn: [['Annual','Semi-Annual','Monthly','Semi-Monthly']]
      }
    },
  },
  {
    timestamp: true
  }
)

PropertySummary.hasOne(PropertyHoa);

PropertyHoa.sync()
  .then(() => {
    console.log('User database synced')
  })
  .catch((err) => {
    console.error(err)
  })

module.exports = PropertyHoa;
