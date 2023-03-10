//On importe le schéma de donnée Mongoose des sorts
const talismanModel = require('../models/talisman')

//Fonction pour créer un sort dans la base de donnée
exports.createTalisman = (req, res) => {

    //On créer un nouveau sort à partir du modèle de mongoose
    const talisman = new talismanModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        location:req.body.location,
        effect: req.body.effect,
        type: req.body.type,
        havefound: req.body.havefound,
        usersfound: req.body.usersfound
        })

    //On enregistre le sort dans la base de donnée
    talisman.save()
    .then(() => res.status(201).json({ message: "item crée", contenu: req.body}))
    .catch((error) => res.status(500).json({error}))

}

//Fonction pour récupérer les données
exports.readTalisman = (req, res) => {

    //On cherche tous les sorts présents dans la base de donnée avec la méthode find
    talismanModel.find()
    .then(() => res.status(200).json({message: "item trouvés", contenu: spells}))
    .catch(error => res.status(404).json({ error }))
}

//Fonction pour récupérer un seul sort en fonction de son _id
exports.readOneTalisman = (req, res) => {

    //On cherche le sort dont l'id correspond à l'id passé en paramètre de l'URL avec la méthode findOne
    talismanModel.findOne({_id : req.params.id})
    .then( spell => res.status(200).json({message: "item trouvé", spell}))
    .catch( error => res.status(404).json({ error }))
}

//Fonction pour modifié un sort 
exports.updateTalisman = (req, res) => {

    console.log(req.params.id)
    console.log(req.params.id === req.body._id)
    console.log(req.body)

    //On récupère le sort dont l'id est le même ue celui passé en paramètre de l'URL
    //On modifie celui-ci avec la méthode updateOne
    talismanModel.updateOne({_id: req.params.id}, {...req.body})
    .then(() => res.status(200).json({ message: "item modifié", contenu: req.body}))
    .catch( error => res.status(404).json({ error }))
}

//Fonction pour supprimer un sort
exports.deleteTalisman = (req, res) => {

    //On récupère le sort dont l'id est le même ue celui passé en paramètre de l'URL
    //On supprime celui-ci avec la méthode deleteOne
    talismanModel.deleteOne({_id: req.body.id}, {...req.body})
    .then(() => res.status(200).json({message: "item supprimé"}))
    .catch( error => res.status(404).json({error}))

}

