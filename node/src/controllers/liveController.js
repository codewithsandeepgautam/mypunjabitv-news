const liveModel =require('../models/liveModel')
const getLiveNews = async (req, res) => {
    try {
      const liveUrl = await liveModel.find().sort({ createdAt: -1 }); // Sort by createdAt in descending order
      
      res.status(200).json( liveUrl );
    } catch (error) {
      console.log('error>>', error);
      res.status(500).json({ message: "Something went wrong" });
    }
}
module.exports= {getLiveNews}