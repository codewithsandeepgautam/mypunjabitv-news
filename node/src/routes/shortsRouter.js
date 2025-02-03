const express = require("express");
const router = express.Router();
const {createShorts,getShorts} = require("../controllers/shortsController");
const {imageUploadMiddleware} = require('../middleware/pdfUploader');

router.post('/uploadshorts', imageUploadMiddleware('img'),createShorts);
router.get('/',getShorts);
module.exports = router;