'use strict';

require('dotenv').config();

const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());

const weatherData = require('./data/weather.json');

app.get('/', (request, response) => {
  response.send('no place like home');
});

app.get('/weather', (request, response) => {
  response.send(weatherData);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});