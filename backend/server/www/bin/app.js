const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const database = require('../../../database/index.js');
const u_credentials = require('../../../database/models/users/credentials.js');
const u_profile = require('../../../database/models/users/profile');
const p_summary = require('../../../database/models/property/summary.js');
const p_overview = require('../../../database/models/property/overview.js');
const p_agency = require('../../../database/models/property/agency.js');
const p_features = require('../../../database/models/property/features.js')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(morgan('dev'));

module.exports = app;
