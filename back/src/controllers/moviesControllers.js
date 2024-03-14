const getMovies = require('../services/moviesService')

const getPeliculas = async  (req, res) => {
    const movies =  await getMovies()

    res.status(200).json(movies)
}

module.exports = getPeliculas;