const mongoose = require("mongoose");
const GallerySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    // categoryId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'category'
    // }
    // isActive: {
    //     type: Boolean,
    //     required: true
    // }
}, { timestamps: true })

const Gallery = mongoose.model("Gallery", GallerySchema);
module.exports = Gallery;
