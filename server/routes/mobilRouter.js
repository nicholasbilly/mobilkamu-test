const express = require('express')
const router = express.Router()
const mobilController = require('../controllers/mobilController')
// const authentication = require('../middlewares/authentication')
// const authorization = require('../middlewares/authorization')

// router.use(authentication)

router.post('/', mobilController.create)
router.get('/', mobilController.find)
router.delete('/:id', mobilController.delete)
router.get('/:id', mobilController.findOne)

module.exports = router