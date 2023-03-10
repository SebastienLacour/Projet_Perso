//Importation de mongoose
const mongoose = require('mongoose')

//On utilise la méthode Schema de mongoose pour créer un nouveau schéma de donnée
//Ce schéma de donnée sera utile pour l'inscription des nouveaux sorts
const spell = mongoose.Schema({
    name: {type: String, require: true},
    imageUrl: {type: String, require: true},
    description: {type: String, require: true},
    type: {type: String, require: true},
    pc: {type: Number, require: true},
    pe: {type: Number, require: true},
    slot: {type: Number, require: true},
    effect: {type: String, require: true},
    stats: {type: Object, require: true},
    location: {type: String, require: true},
    havefound: {type: Number, default: 0},
    usersfound: {type: Array,}
})

//On exporte le schema de donnée spell en tant que modèle
module.exports = mongoose.model("spell", spell)

