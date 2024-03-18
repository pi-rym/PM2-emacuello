const crearCards = require('./renderCards.js')
const axios = require('axios')
const {verifyInput, clear} = require('./form.js')


const datos = async(url) => {
    try {
        const data = await axios(url);
        const cards = data.data;
        cards.forEach(crearCards); 
    } catch (error) {
        alert(error.message)
    }
}
datos('http://localhost:3000/movies');

verifyInput()
clear()











