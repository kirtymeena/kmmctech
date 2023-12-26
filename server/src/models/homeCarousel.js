const mongoose = require('mongoose');

const homeCarouselSchema = new mongoose.Schema({
    imageUrl:String,
    sortOrder:Number
})

module.exports = mongoose.model("homeCarousels",homeCarouselSchema)