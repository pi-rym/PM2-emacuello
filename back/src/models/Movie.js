const {Schema, model} = require('mongoose');

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        min: 0,
        max: 2050,
    },
    director: {
        type: String,
        required: true,
    },
    genre:[String],
    rate: {
        type: Number,
        min: 0,
        max: 10,
    },
    poster: {
        type: String,
        required: true,
    }
})

const Movie = model('Movie',movieSchema)

module.exports = Movie;