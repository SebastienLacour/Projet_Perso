//Importation de mongoose
const mongoose = require('mongoose')

//On utilise la méthode Schema de mongoose pour créer un nouveau schéma de donnée
//Ce schéma de donnée sera utile pour l'inscription des nouveaux matériaux
const material = mongoose.Schema({
    name: {type: String, require: true},
    imageUrl: {type: String, require: true},
    description: {type: String, require: true},
    products: {type: Array, require: true},
    location: {type: String, require: true},
    drop: {type: Array, require: true}
})

//On exporte le schema de donnée material en tant que modèle
module.exports = mongoose.model("material", material)
