const express = require('express')
const cors = require('cors')
require('dotenv').config()
const UserRoutes = require('./routes/UserRoutes')

const app = express()

// Config JSON response
app.use(express.json())

// Solve CORS
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000'
}))

//Public para imagens
app.use(express.static('public'))

// Rotas
app.use('/users', UserRoutes)

// Servidor
const port = process.env.PORT || 3333;;
app.listen(port, () =>{
    console.log("Servidor rodando em http://localhost:" + port);
})