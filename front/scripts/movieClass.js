// const axios = require('axios')
// const btnSubmit = document.getElementById('submit')
class Movies {
    constructor (title, director, year, duration, rate, genre, poster) {
    this._id= null,
    this.title= title;
    this.director= director;
    this.year= year;
    this.duration= duration;
    this.rate= rate;
    this.genre= genre;
    this.poster= poster;
    }
    
}

// const postMovies = (movie) => {
//     const url = 'http://localhost:3000/movies';
//     axios.post(url, movie)
//     .then( response => {
//         console.log('Datos enviados con exito!',response.data)
//     })
//     .catch(error => {
//         console.error('Error al enviar los datos :(', error)
//     })
// }

module.exports = {Movies};