//Importation de jsonwebtoken
const jwt = require('jsonwebtoken')

//Importation des variables environnement
const dotenv = require('dotenv')

//Exportation de la fonction qui gère l'authentification
module.exports = (req, res, next) => {
    try{
        //Récupérer le token dans le headers
        const token = req.headers.authorization.split(" ")[1]
        console.log(token)

        //Décoder le token
        const decodedToken = jwt.verify(token, process.env.TOKEN)
        console.log(decodedToken)

        //Récupérer l'userId du token
        const userIdToken = decodedToken.userId

        //Si l'userId de la requête est le même que celui du token
        //authoriser l'utilisateur en passant au middleware suivant
        if(req.body.userId && (req.body.userId != userIdToken)) {
            throw "User id non valide"
        }
        //Si l'userId de la requête est différent de celui du token
        //refuser l'utilisateur en ne passant pas au middleware
        else{
          next()
        }




        //Passer au middleware suivant
    }
    catch(error){
        res.status(401).json({error})
    }

    
}