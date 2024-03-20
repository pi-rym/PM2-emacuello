const crearCards = require('./renderCards.js')
const axios = require('axios')
const {clear, showAlertRed, showAlertGreen} = require('./form.js')
const btnSubmit = document.getElementById('submit')
const form = document.getElementById("form");

const datos = async(url) => {
    try {
        const data = await axios(url);
        const cards = data.data;
        cards.forEach(crearCards); 
    } catch (error) {
        alert('eror al obtener los datos',error.message)
    }
}
datos('http://localhost:3000/movies');



const handler = (title, director, year, duration, rate, genre, poster) => {
    title = String(title);
    director = String(director);
    year = String(year);
    duration = String(duration);
    rate = String(rate);
    genre = String(genre);
    poster = String(poster);
    const isValid = (str) => str.trim() !== '';
    const isRateValid = !isNaN(rate) && rate >= 0 && rate <= 10;
    const isYearValid = !isNaN(year) && year >= 0 && year <= 2050;
    
    if (!isValid(title) || !isValid(director) || !isValid(genre) || !isValid(poster) || !isValid(duration) || !isRateValid || !isYearValid) {
        form.classList.add('was-validated');
        return showAlertRed();
    } else {
        return {
            _id: null,
            title,
            director,
            year,
            duration,
            rate,
            genre,
            poster
        };
    }
}

async function postMovies (movie) {
    const url = 'http://localhost:3000/movies';
    try {
        const response = await axios.post(url, movie);
        console.log(response.data)
        console.log('Película agregada con éxito');
        showAlertGreen();
    } catch (error) {
        console.log('Error al enviar datos al servidor: 2', error);
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
    if (movie) {
        try {
            await postMovies(movie);           
        } catch (error) {
            console.log('Error al enviar datos al servidor: 1', error);
        }      
    }
})

clear()











