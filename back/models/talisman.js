const mongoose = require('mongoose')

const talisman = mongoose.Schema({
    name: {type: String, require: true},
    imageUrl: {type: String, require: true},
    description: {type: String, require: true},
    location: {type: String, require: true},
    effect: {type: String, require: true},
    type: {type: String, require: true},
    havefound: {type: Number, defaut: 0},
    usersfound: {type: Array}
})

module.exports = mongoose.model("talisman", talisman)