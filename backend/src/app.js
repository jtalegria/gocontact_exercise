'use strict'

const fs = require('fs')
const path = require('path')
const express = require('express');
const morgan = require('morgan')

const app = express();


const cors = require('cors');

const logStream = fs.createWriteStream(
  path.join(__dirname, 'serverLog.log'), { flags: 'a' }
)


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
app.use(morgan('combined', {stream: logStream}))
app.use(express.static(__dirname + "/"))

app.use('/weather', weatherRoute);


module.exports = app;