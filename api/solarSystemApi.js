const express = require('express');
const app = express();
const WeatherController = require('../controllers/WeatherController');

app.get('/clima', WeatherController.getWeather);

app.get('/', WeatherController.getPrediction)

module.exports = app;