// On importe express
const express = require('express')

//On importe les différentes fonctions du controller material
const productsCtrl = require('../controllers/product')

//On importe la fonction router d'express pour créer des routes
const router = express.Router()

//On créer nos routes à l'aide de router
router.post("/products", productsCtrl.createProduct)
router.get("/products", productsCtrl.readProducts)
router.get("/products/:id", productsCtrl.readOneProduct)
router.put("/products/:id", productsCtrl.updateProduct)
router.delete("/products/:id", productsCtrl.deleteProduct)


//On importe la fonction router d'express pour créer des routes
module.exports = router
