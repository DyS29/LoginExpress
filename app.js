const express = require('express')
const app = express()
const port = 3000
// Get the client

const cors = require('cors')
const session = require('express-session')
const md5 = require('md5');
const bcrypt = require('bcrypt');
const login = require('./login');
const registro = require('./registro');
const { eliminarUsuario, obtenerUsuario } = require('./usuario');
const validar = require('./validar');
const saltRounds = 10;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use(session({
  secret: 'saksasd8sa7d7sad'
}))
// Create the connection to database

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', login)

app.get('/validar', validar)

app.get('/registro', registro)

app.get('/usuarios', obtenerUsuario)

app.delete('/usuarios', eliminarUsuario)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})