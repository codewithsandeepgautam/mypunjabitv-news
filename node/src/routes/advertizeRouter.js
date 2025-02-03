const express = require('express')
const { advertiseController } = require('../controllers/advertizeController')
const advertiseRouter = express.Router()
advertiseRouter.post('/', advertiseController)
module.exports = advertiseRouter