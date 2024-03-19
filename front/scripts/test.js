const btnSubmit = document.getElementById('submit')
class Movies {
    constructor (title, director, year, duration, rating, genre, poster) {
    this.title= title;
    this.director= director;
    this.year= year;
    this.duration= duration;
    this.rating= rating;
    this.genre= [genre];
    this.poster= poster;
    }
    
}

// const createMovie = (title, director, year, duration, rating, genre, poster) => {
//     return movie = new Movies(title, director, year, duration, rating, genre, poster)

// }

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    const director = document.getElementById('director').value;
    const year = document.getElementById('year').value;
    const duration = document.getElementById('duration').value;
    const rating = document.getElementById('rating').value
    const genre = document.getElementById('genre').value
    const poster = document.getElementById('poster').value
    const title = document.getElementById('title').value;
    handler(title, director, year, duration, rating, genre, poster)

    
})

const handler = (title, director, year, duration, rating, genre, poster) => {
    if (director === '' || year === '' || duration=== '' || rating=== '' ||genre=== '' ||poster=== '' ||title=== '') {
        return alert('comprobar todos los campos requeridos')
    } else {
        const movie = new Movies(title, director, year, duration, rating, genre, poster);
        return movie;        
    }
}

console.log(handler())