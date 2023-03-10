// On importe express
const express = require('express')

//On importe les différentes fonctions du controller material
const materialsCtrl = require('../controllers/material')

//On importe la fonction router d'express pour créer des routes
const router = express.Router()

//On créer nos routes à l'aide de router
router.post("/materials", materialsCtrl.createMaterial)
router.get("/materials", materialsCtrl.readMaterials)
router.get("/materials/:id", materialsCtrl.readOneMaterial)
router.put("/materials/:id", materialsCtrl.updateMaterial)
router.delete("/materials/:id", materialsCtrl.deleteMaterial)


//On importe la fonction router d'express pour créer des routes
module.exports = router
