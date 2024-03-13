const bienvenida = (req, res) => {
    res.status(200).send('Bienvenido a la app del server')
}

module.exports = bienvenida;