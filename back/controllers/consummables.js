//On importe le schéma de donnée Mongoose des manuels d'artisanat
const consummableModel = require('../models/consummables')

//Fonction pour créer un manuel d'artisanat
exports.createConsummable = (req, res) => {

    const consummable = new consummableModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        type: req.body.type,
        information: req.body.information,
        effect: req.body.effect,

    })

    consummable.save()
        .then(() => res.status(201).json({ message: "contenu crée", contenu: req.body }))
        .catch(error => res.status(500).json({ error }))
}

//Fonction pour récupérer tous les manuels d'artisanat
exports.readConsummable = (req, res) => {

    consummableModel.find()
        .then((consummable) => res.status(200).json({ message: consummable }))
        .catch(error => res.status(400).json({ error }))
}

//Fonction pour récupérer le manuel d'atisanat correspondant à l'id passé en paramètre de l'URL
exports.readOneConsummable = (req, res) => {

    consummableModel.findOne({ _id: req.params.id })
        .then(consummable => res.status(200).json({ message: consummable }))
        .catch(error => res.status(404).json({ error }))
}

//Fonction pour modifier le manuel d'artisanat correspondant à l'id passé en paramètre
exports.updateConsummable = (req, res) => {

    consummableModel.updateOne({ _id: req.params.id }, { ...req.body })
        .then(consummable => res.status(200).json({ message: "item modifié", contenu: req.body }))
        .catch(error => res.status(404).json({ error }))
}

//Fonction pour supprimer le manuel d'artisanat correspondant à l'id passé en paramètre
exports.deleteConsummable = (req, res) => {

    consummableModel.deleteOne({ _id: req.params.id }, { ...req.body })
        .then(consummable => res.status(200).json({ message: "item supprimé" }))
        .catch(error => res.status(404).json({ error }))

}
