const crearCards = require('./renderCards.js')

const axios = require('axios')

const datos = async(url) => {
    try {
        const data = await axios(url);
        const cards = data.data;
        cards.forEach(crearCards); 
    } catch (error) {
        error.message = 'Error de API'
    }
}

datos('https://students-api.2.us-1.fl0.io/movies');









