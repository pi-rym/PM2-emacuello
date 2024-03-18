require('dotenv').config();
const PORT = process.env.PORT
const app = require('./src/server')
const dbConection = require('./src/config/dbConecction')


app.listen(PORT, ()=> {
    console.log(`server on port ${PORT}`)
});
dbConection()
.then(() => {
})
.catch(err => {
    console.log('no se pudo conectar a la base de datos', err.message)
})


