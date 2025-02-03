const Gallery = require("../models/galleryModal");
const cloudinary = require('cloudinary').v2;

const createGallery = async (req, res) => {
    try {
        const { title, alt, } = req.body;
        let imgUrl = '';
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            imgUrl = result.url;
        }
        if (!title || !alt) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const newGallery = new Gallery({
            title,
            alt,
            image: imgUrl
        });
        const savedImages = await newGallery.save();
        res.status(201).json(savedImages);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
}

const getImages = async (req, res) => {
    try {
        const ImagesList = await Gallery.find();
        res.status(200).json(ImagesList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};



module.exports = { createGallery, getImages };