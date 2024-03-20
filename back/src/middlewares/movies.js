const validateMovie = (req, res, next) => {
    const {title, year, director,duration, genre, rate, poster} = req.body;
    if (![ title, year, director,duration, genre, rate, poster].every(Boolean)) return res.status(400).json({message: "Los datos estan incompletos"});
    next()
}

module.exports = validateMovie;