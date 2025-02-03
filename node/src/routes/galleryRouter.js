const express = require("express");
const router = express.Router();
const {createGallery,getImages} = require("../controllers/galleryController");
const { imageUploadMiddleware } = require("../middleware/pdfUploader");
router.post("/uploadimage", imageUploadMiddleware("image"),createGallery);
router.get("/", getImages);
module.exports = router;