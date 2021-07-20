const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const database = require('../../../database/index.js');
const u_credentials = require('../../../database/models/users/credentials.js');
const p_summary = require('../../../database/models/property/summary.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(morgan('dev'));

module.exports = app;
