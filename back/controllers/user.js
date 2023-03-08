//On importe le schéma de donnée Mongoose des utilisateurs
const userModel = require('../models/user')

//On importe bcrypt, package qui va nous permettre de hasher le mot de passe
const bcrypt = require('bcrypt')

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