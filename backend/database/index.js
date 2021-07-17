const sequelize = require('sequelize');
const mysql = require('mysql');

require('dotenv').config()

const database = new sequelize('nexiust', 'omarjandali', 'Kabuto_razer21',
  {
    'host': 'localhost',
    'dialect': 'mysql',
  }
);

database.sync()
  .then((data) => {
    console.log('successfull connection to database')
  })
  .catch((err) => {
    console.error(err);
  })

module.exports = database;
