// On importe express
const express = require('express')

//On importe les différentes fonctions du controller user
const userCtrl = require('../controllers/user')

//On importe la fonction router d'express pour créer des routes
const router = express.Router()

router.post('/auth/signup', userCtrl.signup)
router.post('/auth/login', userCtrl.login)

//On exporte notre module router
module.exports = router