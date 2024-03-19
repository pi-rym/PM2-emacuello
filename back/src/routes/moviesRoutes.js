const {Router} = require('express')
const moviesRoutes = Router()
const {getPeliculas, postMovies, sendMovies} = require('../controllers/moviesControllers')


moviesRoutes.get('/movies',getPeliculas)
moviesRoutes.get('/movies/:id', sendMovies)
moviesRoutes.post('/movies',postMovies)

module.exports = moviesRoutes