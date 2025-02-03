const Shorts = require('../models/shortsModal'); 
const cloudinary = require('cloudinary').v2;

const createShorts = async (req, res) => {
  try {
    const { title, titlePa, videourl} = req.body;
    let imgUrl = '';
    if(req.file){
      const result = await cloudinary.uploader.upload(req.file.path);
      imgUrl = result.url;
    }
    if (!title || !titlePa || !videourl) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const newShorts = new Shorts({
      title,
      titlePa,
      videourl,
      img :imgUrl,
    });
    const savedShorts = await newShorts.save();
    res.status(201).json(savedShorts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

const getShorts = async (req, res) => {
    try {
      const shortsList = await Shorts.find();
      res.status(200).json(shortsList);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error. Please try again later." });
    }
  };
module.exports = {
  createShorts,
  getShorts
};
