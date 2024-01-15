const express = require('express');
const app = express();
const movie = require('../routes/movieRoutes');

app.use(express.json());

app.use('/api/v1', movie);

module.exports = app;
