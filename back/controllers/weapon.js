//On importe le schéma de donnée
const weaponModel = require('../models/weapon')

//Fonction pour la création d'arme
exports.createWeapon = (req, res) => {

    const weapon = new weaponModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        attackType: req.body.attackType,
        location: req.body.location,
        drop: req.body.drop,
        damages: req.body.damages,
        defenses: req.body.defenses,
        stats: req.body.stats,
        scaling: req.body.scaling,
        skill: req.body.skill,
        weight: req.body.weight,
        upgrade: req.body.upgrade,
        ashes: req.body.ashe,
        havefound: req.body.havefound,
        usersfound: req.body.usersfound
    })

    //On enregistre la nouvelle arme dans la base de donnée
    weapon.save()
    .then( weapon => res.status(201).json({message: "item créée", contenu: weapon}))
    .catch( error => res.status(500).json({error}))
}

//Fonction pour récupérer toutes les armes de la base de donnée
exports.readWeapon = (req, res) => {

    //On récupère toutes les armes présentes dans la base de donnée
    weaponModel.find()
    .then( weapons => res.status(200).json({weapons}))
    .catch( error => res.status(404).json({error}))
}

//Fonction pour récupérer une seule arme
exports.readOneWeapon = (req, res) => {

    //On récupère une arme selon son id
    //ON va chercher l'arme dont l'id correspond l'id passé en paramètre de l'URL
    weaponModel.findOne({_id: req.params.id})
    .then( weapon => res.status(200).json({weapon}))
    .catch( error => res.status(404).json({error}))
}

//Fonction pour modifier une arme
exports.updateWeapon = (req, res) => {

    //On récupère l'arme selon son id pour la modifier
    //ON va chercher l'arme dont l'id correspond à l'id passé en paramètre de l'URL
    //On modifie et enregistre la nouvelle valeur de l'objet
    weaponModel.updateOne({_id: req.params.id}, {...req.body})
    .then(() => res.status(200).json({message: "arme modifiée", contenu: req.body}))
    .catch( error => res.status(404).json({error}))
}

//Fonction pour supprimer une arme
exports.deleteWeapon = (req, res) => {

    //ON récupère l'arme selon son id pour la supprimer
    //On va chercher l'arme dont l'id correspond à l'id passé en paramètre de l'URL
    //On supprime ceet objet de la base de donnée
    weaponModel.deleteOne({_id: req.params.id}, {...req.body})
    .then(() => res.status(200).json({message: "arme supprimée"}))
    .catch( error => res.status(404).json({error}))
}