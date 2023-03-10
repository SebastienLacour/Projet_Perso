const express = require('express')

const talismanCtrl = require('../controllers/talisman')

const router = express.Router()

router.post('/talisman', talismanCtrl.createTalisman)
router.get('/talisman', talismanCtrl.readTalisman)
router.get('/talisman', talismanCtrl.readOneTalisman)
router.put('/talisman', talismanCtrl.updateTalisman)
router.delete('/talisman', talismanCtrl.deleteTalisman)

module.exports = router