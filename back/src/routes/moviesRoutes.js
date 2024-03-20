const {Router} = require('express')
const moviesRoutes = Router()
const {getPeliculas, postMovies, sendMovies} = require('../controllers/moviesControllers')
const validateMovie = require('../middlewares/movies')

moviesRoutes.get('/movies',getPeliculas)
moviesRoutes.get('/movies/:id', sendMovies)
moviesRoutes.post('/movies',validateMovie ,postMovies)

module.exports = moviesRoutes