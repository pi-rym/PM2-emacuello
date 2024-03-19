const Movie = require('../models/Movie')


const getMovies = async () => {
    try {
        const movies = await Movie.find();
        return movies;
        
    } catch (error) {
        throw new Error('Error al obtener las peliculas')
    }
}

const sendMovie = async (id) => {
    try {
        const movies = await Movie.findById(id);
        return movies;
        
    } catch (error) {
        throw new Error('Error al obtener el ID')     
    }
}

const createMovie = async (movie) => {
    try {
        const newMovie = await Movie.create(movie);
        return newMovie;
    } catch (error) {
        throw new Error('Error al agregar la pelicula')
    }
}

module.exports = {getMovies, createMovie, sendMovie}