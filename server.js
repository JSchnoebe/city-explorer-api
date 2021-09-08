'use strict';

const express = require('express');

const app = express();

const PORT = 3001;

const weatherData = require('./data/weather.json');

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});