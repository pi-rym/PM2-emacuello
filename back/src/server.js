const express = require('express');
const router = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes')
const app = express();

app.use(router)
app.use(moviesRoutes)

module.exports = app;