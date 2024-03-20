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


module.exports = {Movies};