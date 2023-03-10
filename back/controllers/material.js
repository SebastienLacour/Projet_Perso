//On importe le schéma de donnée Mongoose des manuels d'artisanat
const materialModel = require('../models/material')

//Fonction pour créer un matériau
exports.createMaterial = (req, res) => {

    const material = new materialModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        location: req.body.location,
        products: req.body.products,
        drop: req.body.drop
    })

    material.save()
    .then(() => res.status(201).json({ message: "contenu crée", contenu: req.body}))
    .catch( error => res.status(500).json({error}))
}

//Fonction pour récupérer tous les matériaux
exports.readMaterials = (req, res) => {

    materialModel.find()
    .then((material) => res.status(200).json({ message: material}))
    .catch( error => res.status(400).json({error}))
}

//Fonction pour récupérer le matériau correspondant à l'id passé en paramètre de l'URL
exports.readOneMaterial = (req, res) => {

    materialModel.findOne({ _id: req.params.id})
    .then( material => res.status(200).json({ message: material}))
    .catch( error => res.status(404).json({error}))
}

//Fonction pour modifier le matériau correspondant à l'id passé en paramètre
exports.updateMaterial = (req, res) => {

    materialModel.updateOne({ _id: req.params.id}, {...req.body})
    .then( material => res.status(200).json({ message: "item modifié", contenu: req.body}))
    .catch( error => res.status(404).json({error}))
}

//Fonction pour supprimer le matériau correspondant à l'id passé en paramètre
exports.deleteMaterial = (req, res) => {

    materialModel.deleteOne({ _id: req.params.id}, {...req.body})
    .then( material => res.status(200).json({ message: "item supprimé"}))
    .catch( error => res.status(404).json({error}))

}
