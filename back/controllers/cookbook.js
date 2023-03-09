//On importe le schéma de donnée Mongoose des manuels d'artisanat
const cookbookModel = require('../models/cookbook')

//Fonction pour créer un manuel d'artisanat
exports.createCookbook = (req, res) => {

    const cookbook = new cookbookModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        type: req.body.type,
        location: req.body.location,
        products: req.body.products,
        havefound: req.body.havefound,
        usersfound: req.body.usersfound
    })

    cookbook.save()
    .then(() => res.status(201).json({ message: "contenu crée", contenu: req.body}))
    .catch( error => res.status(500).json({error}))
}

//Fonction pour récupérer tous les manuels d'artisanat
exports.readCookbook = (req, res) => {

    cookbookModel.find()
    .then((cookbook) => res.status(200).json({ message: cookbook}))
    .catch( error => res.status(400).json({error}))
}

//Fonction pour récupérer le manuel d'atisanat correspondant à l'id passé en paramètre de l'URL
exports.readOneCookbook = (req, res) => {

    cookbook.findOne({ _id: req.params.id})
    .then( cookbook => res.status(200).json({ message: cookbook}))
    .catch( error => res.status(404).json({error}))
}

//Fonction pour modifier le manuel d'artisanat correspondant à l'id passé en paramètre
exports.updateCookbook = (req, res) => {

    cookbook.updateOne({ _id: req.params.id, ...req.body})
    .then( cookbook => res.status(200).json({ message: "item modifié", contenu: req.body}))
    .catch( error => res.status(404).json({error}))
}

//Fonction pour supprimer le manuel d'artisanat correspondant à l'id passé en paramètre
exports.deleteCookbook = (req, res) => {

    cookbook.deleteOne({ _id: req.params.id})
    .then( cookbook => res.status(200).json({ message: "item supprimé"}))
    .catch( error => res.status(404).json({error}))

}
