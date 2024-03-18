const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.URI

const dbConection = async ()=> {
    await mongoose.connect(URI)
}

module.exports = dbConection;