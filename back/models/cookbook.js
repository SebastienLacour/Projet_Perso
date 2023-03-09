//On importe mongoose
const mongoose = require('mongoose')

//On utilise la méthode Schema de mongoose pour créer un nouveau schéma de donnée
//Ce schéma de donnée sera utile pour l'inscription des nouveaux manuels d'artisanat
const cookbook = mongoose.Schema({
    name: {type: String, require: true},
    imageUrl: {type: String, require: true},
    description: {type: String, require: true},
    type: {type: String, require: true},
    location: {type: String, require: true},
    products: {type: Array, require: true},
    havefound: {type: Number, require: true},
    usersfound: {type: Array, require: true}
})

//On exporte le schema de donnée cookbook en tant que modèle
module.exports = mongoose.model("cookbook", cookbook)
