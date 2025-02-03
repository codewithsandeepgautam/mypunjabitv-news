const mongoose = require('mongoose')
const advertiseSchema = mongoose.Schema({
    businessName:{
        type:String,
        required:true
    },
    businessType:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }

},{timestamps:true})

module.exports = mongoose.model("Advertise", advertiseSchema)