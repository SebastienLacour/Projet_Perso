//On importe le schéma de donnée Mongoose des utilisateurs
const userModel = require('../models/user')

//Fonction qui gère la création d'un nouveau compte
exports.signup = (req, res) => {
    console.log("           SIGNUP          ")
    console.log(req.body)

    //On créer un nouvel utilisateur à partir du modèle de donnée utilisateur
    const user = new userModel({
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: req.body.password
    })

    console.log(user)

    user.save()
    .then(() => res.status(201).json({message: req.body}))
    .catch( error => res.status(500).json({ error }))
}