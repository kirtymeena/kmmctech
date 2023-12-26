const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productId:String,
    title:String,
    price:Number,
    discountedPrice:Number,
    description:String,
    productImages:Object,
    technicalSpecification:Array,
    productVideo:String,
    discriptionExtra:Array,
    faq:Array,
    documents:Array,
    category:String,
    subCategory:String,
},{timestamps:true})

module.exports = mongoose.model("products",ProductSchema)