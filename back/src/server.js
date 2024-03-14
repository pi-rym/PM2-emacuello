const express = require('express');
const router = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes')
const app = express();
const morgan = require('morgan');
const cors = require('cors');


app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

app.use(router)
app.use(moviesRoutes)

module.exports = app;