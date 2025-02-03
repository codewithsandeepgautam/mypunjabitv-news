const mongoose = require('mongoose')
const categorySchema = mongoose.Schema({
    category:String,
    categoryPa:String ,
    isDeleted: { type: Boolean, default: false }

});
    
module.exports = mongoose.model('Category', categorySchema) 