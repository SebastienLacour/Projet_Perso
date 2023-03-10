//On importe express
const express = require('express')

//On importe le controller
const weaponCtrl = require('../controllers/weapon')

//On récupère la fonction Router d'Express
const router = express.Router()

//Routes pour gérer les armes
router.post('/weapons', weaponCtrl.createWeapon)
router.get('/weapons', weaponCtrl.readWeapon)
router.get('/weapons/:id', weaponCtrl.readOneWeapon)
router.put('/weapons/:id', weaponCtrl.updateWeapon)
router.delete('/weapons/:id', weaponCtrl.deleteWeapon)

//On exporte le router
module.exports = router








