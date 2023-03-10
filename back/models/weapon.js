//IMportation de mongoose
const mongoose = require('mongoose')

//Création du schéma de donnée pour les armes
const weapon = mongoose.Schema({
    name: {type: String, require: true},
    imageUrl: {type: String, require: true},
    description: {type: String, require: true},
    attackType: {type: String, require: true},
    location: {type: String, require: true},
    drop: {type: Array, require: true},
    damages: {type: Object, require: true},
    defenses: {type: Object, require: true},
    stats: {type: Object, require: true},
    scaling: {type: Object, require: true},
    skill: {type: String, require: true},
    weight: {type: Number, require: true},
    upgrade: {type: String, require: true},
    ashes: {type: Boolean, require: true},
    havefound: {type: Number, defaut: 0},
    usersfound: {type: Array}
})

//On exporte le modèle pour les armes
module.exports = mongoose.model("weapon", weapon)