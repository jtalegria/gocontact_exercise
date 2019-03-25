'use strict'

const express = require('express');
const app = express();

// -- LOAD ROUTES --
const weatherRoute = require('./routes/weather-route');

// -- ROUTE ASSIGNMENT --
app.use('/weather', weatherRoute);

module.exports = app;