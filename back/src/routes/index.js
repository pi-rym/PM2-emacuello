const {Router} = require('express')
const bienvenida = require('../controllers/index')
const getPeliculas = require('../controllers/moviesControllers')
const router = Router()

router.get('/', bienvenida)

router.get('/movies',getPeliculas)

module.exports = router
