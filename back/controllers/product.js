//On importe le schéma de donnée Mongoose des produits
const productModel = require('../models/product')

//Fonction pour créer un produit
exports.createProduct = (req, res) => {

    const product = new productModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        effect: req.body.effect,
        materials: req.body.materials,
        cookbook: req.body.cookbook
    })

    product.save()
    .then(() => res.status(201).json({ message: "contenu crée", contenu: req.body}))
    .catch( error => res.status(500).json({error}))
}

//Fonction pour récupérer tous les produits
exports.readProducts = (req, res) => {

    productModel.find()
    .then((product) => res.status(200).json({ message: product}))
    .catch( error => res.status(400).json({error}))
}

//Fonction pour récupérer le produit correspondant à l'id passé en paramètre de l'URL
exports.readOneProduct = (req, res) => {

    productModel.findOne({ _id: req.params.id})
    .then( product => res.status(200).json({ message: product}))
    .catch( error => res.status(404).json({error}))
}

//Fonction pour modifier le produit correspondant à l'id passé en paramètre
exports.updateProduct = (req, res) => {

    productModel.updateOne({ _id: req.params.id}, {...req.body})
    .then(() => res.status(200).json({ message: "item modifié", contenu: req.body}))
    .catch( error => res.status(404).json({error}))
}

//Fonction pour supprimer le produit correspondant à l'id passé en paramètre
exports.deleteProduct = (req, res) => {

    productModel.deleteOne({ _id: req.params.id}, {...req.body})
    .then( () => res.status(200).json({ message: "item supprimé"}))
    .catch( error => res.status(404).json({error}))

}
