const express = require('express')
const{getLiveNews} =require('../controllers/liveController')
const liveRouter = express.Router()
liveRouter.get('/getLive', getLiveNews)
module.exports= liveRouter