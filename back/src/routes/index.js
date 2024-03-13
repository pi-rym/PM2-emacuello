const {Router} = require('express')
const bienvenida = require('../controllers/index')
const router = Router()

router.get('/', bienvenida)


module.exports = router
