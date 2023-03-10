//On importe le schéma de donnée Mongoose des sorts
const spellModel = require('../models/spells')

//Fonction pour créer un sort dans la base de donnée
exports.createSpell = (req, res) => {
    console.log("                            CREATE SPELLS                                ")

    //On créer un nouveau sort à partir du modèle de mongoose
    const spell = new spellModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        type: req.body.type,
        pc: req.body.pc,
        pe: req.body.pe,
        slot: req.body.slot,
        effect: req.body.effect,
        stats: req.body.stats,
        location: req.body.location,
        havefound: req.body.havefound,
        usersfound: req.body.usersfound
    })

    //On enregistre le sort dans la base de donnée
    spell.save()
    .then(() => res.status(201).json({ message: "sort crée", contenu: req.body}))
    .catch((error) => res.status(500).json({error}))

}

//Fonction pour récupérer les données
exports.readSpell = (req, res) => {

    //On cherche tous les sorts présents dans la base de donnée avec la méthode find
    spellModel.find()
    .then((spells) => res.status(200).json({message: "sorts trouvés", contenu: spells}))
    .catch(error => res.status(404).json({ error }))
}

//Fonction pour récupérer un seul sort en fonction de son _id
exports.readOneSpell = (req, res) => {

    //On cherche le sort dont l'id correspond à l'id passé en paramètre de l'URL avec la méthode findOne
    spellModel.findOne({_id : req.params.id})
    .then( spell => res.status(200).json({message: "sort trouvé", spell}))
    .catch( error => res.status(404).json({ error }))
}

//Fonction pour modifié un sort 
exports.updateSpell = (req, res) => {

    console.log(req.params.id)
    console.log(req.params.id === req.body._id)
    console.log(req.body)

    //On récupère le sort dont l'id est le même ue celui passé en paramètre de l'URL
    //On modifie celui-ci avec la méthode updateOne
    spellModel.updateOne({_id: req.params.id}, {...req.body})
    .then(() => res.status(200).json({ message: "sort modifié", contenu: req.body}))
    .catch( error => res.status(404).json({ error }))
}

//Fonction pour supprimer un sort
exports.deleteSpell = (req, res) => {

    //On récupère le sort dont l'id est le même ue celui passé en paramètre de l'URL
    //On supprime celui-ci avec la méthode deleteOne
    spellModel.deleteOne({_id: req.body.id}, {...req.body})
    .then(() => res.status(200).json({message: "sort supprimé"}))
    .catch( error => res.status(404).json({error}))

}
