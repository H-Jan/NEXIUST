const sequelize = require('sequelize');
const database = require('../../index.js');

const User = database.define(
  'User',
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        min: 6,
        max: 16
      }
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        min: 6,
        max: 16
      }
    },
    status: {
      type: sequelize.INTEGER,
      allowNull: false
    },
    type: {
      type: sequelize.INTEGER,
      allowNull: false
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

User.sync()
  .then(() => {
    //console.log('User database synced')
  })
  .catch((err) => {
    console.error(err)
  })

module.exports = User;
