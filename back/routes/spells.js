// On importe express
const express = require('express')

//On importe les différentes fonctions du controller user
const spellsCtrl = require('../controllers/spells')

//On importe la fonction router d'express pour créer des routes
const router = express.Router()

//On créer nos routes à l'aide de router
router.post("/spells", spellsCtrl.createSpell)
router.get("/spells", spellsCtrl.readSpell)
router.get("/spells/:id", spellsCtrl.readOneSpell)
router.put("/spells/:id", spellsCtrl.updateSpell)
router.delete("/spells/:id", spellsCtrl.deleteSpell)

//On exporte notre module router
module.exports = router