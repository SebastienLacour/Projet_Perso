// On importe express
const express = require('express')

//On importe les différentes fonctions du controller user
const cookbooksCtrl = require('../controllers/cookbook')

//On importe le controller pour gérer les utilisaterus ayant trouvé l'item
const foundCtrl = require('../controllers/found')

//On importe le middleware d'authentification
const auth = require('../middlewares/auth')

//On importe la fonction router d'express pour créer des routes
const router = express.Router()

//On créer nos routes à l'aide de router
router.post("/cookbooks", cookbooksCtrl.createCookbook)
router.get("/cookbooks", cookbooksCtrl.readCookbook)
router.get("/cookbooks/:id", cookbooksCtrl.readOneCookbook)
router.put("/cookbooks/:id", cookbooksCtrl.updateCookbook)
router.delete("/cookbooks/:id", cookbooksCtrl.deleteCookbook)
router.post("/cookbooks/:id/found", auth, foundCtrl.foundCookbook )


//On importe la fonction router d'express pour créer des routes
module.exports = router
