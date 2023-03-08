// On créer la variable http pour récupérer le package http
const http = require('http')

//On récupère app.js
const app = require('./app')

//On initialise le port du serveur à 8080
app.set("port", 8080);

//On créer le server avec la méthode createServer contenant tout les fonctions pouvant faire tourner un serveur
//Les fonctions de notre API seront sur app.js
const server = http.createServer(app)

//Le serveur "écoute" les requêtes sur le port 8080
server.listen(8080)