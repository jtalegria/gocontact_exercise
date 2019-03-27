'use strict'

const express = require('express');
const app = express();
var cors = require('cors');

// -- LOAD ROUTES --
const weatherRoute = require('./routes/weather-route');

// -- PERMISSÕES --
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));


// -- ROUTE ASSIGNMENT --
app.use('/weather', weatherRoute);

module.exports = app;