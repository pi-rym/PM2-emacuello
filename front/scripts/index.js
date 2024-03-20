const crearCards = require('./renderCards.js')
const axios = require('axios')
const {verifyInput, clear} = require('./form.js')
const btnSubmit = document.getElementById('submit')
const {Movies} = require('./movieClass.js')


const datos = async(url) => {
    try {
        const data = await axios(url);
        const cards = data.data;
        cards.forEach(crearCards); 
    } catch (error) {
        alert('eror no se',error.message)
    }
}
datos('http://localhost:3000/movies');

verifyInput()




const handler = (title, director, year, duration, rate, genre, poster) => {
    if (director === '' || year === '' || duration=== '' || rate=== '' ||genre=== '' ||poster=== '' ||title=== '') {
        return alert('comprobar todos los campos requeridos')
    } else {
        return new Movies(title, director, year, duration, rate, genre, poster);       
    }
}

async function postMovies (movie) {
    const url = 'http://localhost:3000/movies';
    try {
        const response = await axios.post(url, movie);
        console.log(response.data)
        console.log('Película agregada con éxito');
    } catch (error) {
        console.error('Error al enviar datos al servidor:', error.message);
    }
}

btnSubmit.addEventListener('click', async (event) => {
    event.preventDefault()
    const director = document.getElementById('director').value;
    const year = document.getElementById('year').value;
    const duration = document.getElementById('duration').value;
    const rate = document.getElementById('rate').value;
    const genre0 = document.getElementById('genre');
    const genre = genre0.value.split(/[,\s;]+/).filter(x => x !== "");
    const poster = document.getElementById('poster').value;
    const title = document.getElementById('title').value;
    const movie= handler(title, director, year, duration, rate, genre, poster)
    console.log(movie)
    if (movie) {
        try {
            await postMovies(movie);           
        } catch (error) {
            console.error('Error al enviar datos al servidor:', error);
        }      
    }
})

clear()











