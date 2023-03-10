//Importation de mongoose
const mongoose = require('mongoose')

//On utilise la méthode Schema de mongoose pour créer un nouveau schéma de donnée
//Ce schéma de donnée sera utile pour l'inscription des nouveaux produits
const product = mongoose.Schema({
    name: {type: String, require: true},
    imageUrl: {type: String, require: true},
    description: {type: String, require: true},
    materials: {type: Array, require: true},
    effect: {type: String, require: true},
    cookbook: {type: String, require: true},
})

//On exporte le schema de donnée product en tant que modèle
module.exports = mongoose.model("product", product)
