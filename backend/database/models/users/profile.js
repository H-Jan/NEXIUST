const sequelize = require('sequelize');
const database = require('../../index.js');

const User = require('./user.js');

const Profile = database.define(
  'Profile',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        min: 6,
        max: 16
      }
    },
    last_name: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        min: 6,
        max: 16
      }
    },
    phone: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        len: [9],
      }
    },
    gender: {
      type: sequelize.STRING,
      allowNull: false,
      default: 'O',
      validate: {
        isIn: [['M', 'F', 'O']]
      }
    },
    acct: {
      type: sequelize.STRING,
      allowNull: false,
      default: 'B',
      validate: {
        isIn: [['B','S','I','A']]
      }
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

User.hasOne(Profile)

Profile.sync()
  .then(() => {
    //console.log('User database synced')
  })
  .catch((err) => {
    console.error(err)
  })

module.exports = Profile;
