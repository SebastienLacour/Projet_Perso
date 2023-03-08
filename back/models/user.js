//On importe mongoose
const mongoose = require('mongoose')

//On importe mongooseUniqueValidator pour forcer la génération d'email et de pseudo uniques
const muv = require('mongoose-unique-validator')

//On utilise la méthode Schema de mongoose pour créer un nouveau schéma de donnée
//Ce schéma de donnée sera utile pour l'inscription des nouveaux utilisateurs
const user = mongoose.Schema({
    pseudo: {type: String, require: true, unique: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true}
})

//On exporte le schema de donnée user en tant que modèle
module.exports = mongoose.model("user", user)

