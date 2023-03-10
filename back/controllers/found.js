const cookbookModel = require('../models/cookbook')

exports.foundCookbook = (req, res, next) => {

    console.log(req.body)

    //On récupère l'id de l'objet ciblé par le found
    cookbookModel.findOne({ _id: req.params.id })
        .then(cookbook => {

            //Item trouvé = +1
            //Si userId n'est pas présent dans userfound ET found === 1
            if (!cookbook.usersfound.includes(req.body.userId) && req.body.havefound === 1) {
                console.log(true)

                //Mise à jour de l'objet séléctionné dans la base de donnée
                cookbookModel.updateOne(
                    { _id: req.params.id },

                    {
                        //On utilise l'opérateur de MongoDb $inc pour incrémenter havefound
                        $inc: { havefound: 1 },

                        //On utilise l'opérateur de mongoDb $push pour ajouter l'userId dans usersfound
                        $push: { usersfound: req.body.userId }
                    },

                )
                    .then(() => res.status(201).json({ message: "havefound ajouté" }))
                    .catch(error => res.status(400).json({ error }))
            }

            //Item non trouvé = 0
            //Si l'userId est déja présents dans usersfound et havefound = 0 (annulation)
            if (cookbook.usersfound.includes(req.body.userId) && req.body.havefound === 0) {
                cookbookModel.updateOne(
                    { _id: req.params.id },

                    {
                        //On utilise l'opérateur de MongoDb $inc pour incrémenter havefound
                        $inc: { havefound: -1 },

                        //On utilise l'opérateur  de mongoDb $pull pour retirer l'userId de usersfound
                        $pull: {usersfound: req.body.userId}

                    },


                )

                .then(() => res.status(201).json({ message: "havefound retiré" }))
                .catch( error => res.status(404).json({error}))
            }

        })
        .catch(error => res.status(404).json({ error }))
}