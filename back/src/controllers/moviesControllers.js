const {getMovies, createMovie, sendMovie} = require('../services/moviesService')

const getPeliculas = async  (req, res) => {
    const movies =  await getMovies()

    res.status(200).json(movies)
}

const sendMovies = async (req, res) => {
    const {id} = req.params;
    const movie = await sendMovie(id);
    res.status(200).json(movie)
}

const postMovies = async (req, res) => {
        const {_id, title, year, director,duration, genre, rate, poster} = req.body;
        const newMovies = await createMovie({_id, title, year, director, duration, genre, rate, poster});
        res.status(201).json(newMovies);
}


module.exports = {getPeliculas, postMovies, sendMovies};