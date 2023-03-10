//On importe express qu'on a précédemment installé
const express = require('express')

//On importe morgan pour pouvoir logger les requêtes
const morgan = require('morgan')

//On importe mongoose pour accéder à la base de donnée
const mongoose = require('mongoose')

//On importe body-parser pour 
const bodyParser = require('body-parser')

//On importe dotenv pour les variables environnement
const dotenv = require('dotenv')
const result = dotenv.config()

//On importe les différentes routes nécéssaires pour le fonctionnement de notre API
const userRoutes = require('./routes/user.js')
const spellsRoutes = require('./routes/spells')
const cookbookRoutes = require('./routes/cookbook')
const materialRoutes = require('./routes/material')
const productRoutes = require('./routes/product')

//Création de l'application express
const app = express()

//Logger les req et les res
app.use(morgan("dev"))

//On utilise body-parser pour pouvoir transformer les corps des requêtes en objet json utilisable en js
app.use(bodyParser.json())

//Connexion avec la base de donnée de mongoDb
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vtuvewi.mongodb.net/?retryWrites=true&w=majority`)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'))

//Gérer le controle CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//Routes générales de l'application 
app.use('/api', userRoutes)
app.use('/api', spellsRoutes)
app.use('/api', cookbookRoutes)
app.use('/api', materialRoutes)
app.use('/api', productRoutes)

//On exporte le module app
module.exports = app

