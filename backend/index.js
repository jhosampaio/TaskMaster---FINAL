const express = require('express')
const cors = require('cors')
const exphbs = require('express-handlebars')
require('dotenv').config()
const UserRoutes = require('./routes/UserRoutes')
const OutherRoutes = require('./routes/OutherRoutes')

const app = express()

// Config JSON response
app.use(express.json())

// Views
app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

// Solve CORS
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

//Public para imagens
app.use(express.static('public'))

// Rotas
app.get('/', (req, res) => {
    res.render('public/home');
  });
app.use('/master', OutherRoutes)
app.use('/users', UserRoutes)

// Servidor
const port = process.env.PORT || 3333;;
app.listen(port, () =>{
    console.log("Servidor rodando em http://localhost:" + port);
})