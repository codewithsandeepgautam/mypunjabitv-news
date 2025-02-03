const express = require("express")
const { imageUploadMiddleware } = require("../middleware/pdfUploader")
const { careerController } = require("../controllers/careerController")
const careerRouter= express.Router()
careerRouter.post('/' , imageUploadMiddleware('file'), careerController)
module.exports = careerRouter
