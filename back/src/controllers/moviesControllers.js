const {getMovies, createMovie, sendMovie} = require('../services/moviesService')

const getPeliculas = async  (req, res) => {
    try {        
        const movies =  await getMovies()
        res.status(200).json(movies)
    
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const sendMovies = async (req, res) => {
    try {        
        const {id} = req.params;
        const movie = await sendMovie(id);
        res.status(200).json(movie)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const postMovies = async (req, res) => {
    try {        
        const {_id, title, year, director,duration, genre, rate, poster} = req.body;
        const newMovies = await createMovie({_id, title, year, director, duration, genre, rate, poster});
        res.status(201).json('La pelicula fue agregada con exito',newMovies);
    } catch (error) {
        res.status(400).json({error:error.message,type: "error del tipo 2"})
    }
}


module.exports = {getPeliculas, postMovies, sendMovies};