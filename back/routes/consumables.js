const express = require('express')

const consummablesCtrl = require('../controllers/consummables')

const router = express.Router()

//On créer nos routes à l'aide de router
router.post("/consummables", consummablesCtrl.createConsummable)
router.get("/consummables", consummablesCtrl.readConsummable)
router.get("/consummables/:id", consummablesCtrl.readOneConsummable)
router.put("/consummables/:id", consummablesCtrl.updateConsummable)
router.delete("/consummables/:id", consummablesCtrl.deleteConsummable)

module.exports = router