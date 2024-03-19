const Movie = require('../models/Movie')


const getMovies = async () => {
    const movies = await Movie.find().populate();
    return movies;
}
const sendMovie = async (id) => {
    const movies = await Movie.findById(id);
    return movies;
}
const createMovie = async (movie) => {
    const newMovie = await Movie.create(movie);
    return newMovie;
}

module.exports = {getMovies, createMovie, sendMovie}