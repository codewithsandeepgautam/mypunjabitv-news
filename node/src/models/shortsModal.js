const mongoose = require("mongoose");
const ShortsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    titlePa: {
        type: String,
        required: true
    },
    videourl: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }

},{timestamps: true})

const Shorts = mongoose.model("Shorts",ShortsSchema);
module.exports = Shorts;