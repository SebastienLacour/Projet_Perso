//On importe le schéma de donnée Mongoose des utilisateurs
const userModel = require('../models/user')

//On importe bcrypt, package qui va nous permettre de hasher le mot de passe
const bcrypt = require('bcrypt')

//On import jsonwebtoken, un package nous permettant de générer aléatoirement un token d'authentification
const jwt = require('jsonwebtoken')

//On importe dotenv
const dotenv = require('dotenv')

//Fonction qui gère la création d'un nouveau compte
exports.signup = (req, res) => {
    console.log("           SIGNUP          ")
    console.log(req.body)

    //On utilise la méthode hash de bcrypt pour hasher le mot de passe, 
    //on fait 10 tours de sels, c'est à dire on crypte 10 fois le mot de passe
    bcrypt.hash(req.body.password, 10)
        .then((hashedpassword) => {

            //On créer un nouvel utilisateur à partir du modèle de donnée utilisateur tout en cryptant le mot de passe
            const user = new userModel({
                pseudo: req.body.pseudo,
                email: req.body.email,
                password: hashedpassword
            })

            console.log(user)

            //On enregistre le nouvel utilisateur dans la base de donnée
            user.save()
            .then(() => res.status(201).json({ message: user }))
            .catch(error => res.status(400).json({ error }))
        }
        )
        .catch( error => res.status(500).json({ error }))

}

//fonction qui gère la connexion
exports.login = (req, res) => {
    console.log("           LOGIN          ")

    //On cherche parmis les données l'email correspondant à celui du corps de la requête
    userModel.findOne( {email: req.body.email})
    .then(user => {

        //Si l'email du corps de la requ^te ne correspnd avec aucun email de la base de donnée, retourne un erreur 404
        //On utilise ici return pour faire arrêter le code à ce niveau si la condition est remplie
        if(!user) {
            return res.status(404).json({message : "utilisateur inéxistant"})
        }

        //Si l'email éxiste dans la base de donnée, on contrôle le mot de passe grâce à la méthode compare de bcrypt
        //On va cherche si pour l'email séléctionné, le mot de passe est correct
        bcrypt.compare(req.body.password, user.password)
            .then( passwordValid => {

                //Si le mot de passe est incorrect, on retourne une erreur 403
                if (!passwordValid) {
                     return res.status(403).json({message: "mot de passe incorrect"})
                }

                //Si le mot de passe est correct, retourne une réponse 200 pour dire que la requête est validée
                return res.status(200).json({
                    //On envoie l'id de l'utilisateur (userId)
                    userId : user._id,

                    //On utilise la méthode sign de jsonwebtoken pour générer un token
                    token : jwt.sign(
                        //L'user Id pour le lié au token
                        {userId: user._id},

                        //Le token
                        `${process.env.TOKEN}`,

                        //La date d'expiration du token
                        {expiresIn: '24h'}
                    )
                })
            })
            .catch( error => res.status(500).json({ error }))
    })
    .catch( error => res.status(500).json({ error }))

}