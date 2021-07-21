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
const p_features = require('../../../database/models/property/features.js');
const p_hoa = require('../../../database/models/property/hoa.js');
const p_land = require('../../../database/models/property/land.js');
const p_cost = require('../../../database/models/property/cost.js');
const p_market = require('../../../database/models/property/value.js');
const p_neighborhood = require('../../../database/models/property/neighborhood.js');
const p_schools = require('../../../database/models/property/schools.js');

const i_summary = require('../../../database/models/investment/summary.js')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(morgan('dev'));

module.exports = app;
