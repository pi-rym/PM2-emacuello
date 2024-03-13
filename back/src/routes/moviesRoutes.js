const {Router} = require('express')
const moviesRoutes = Router()
const getPeliculas = require('../controllers/moviesControllers')


moviesRoutes.get('/movies',getPeliculas)

module.exports = moviesRoutes