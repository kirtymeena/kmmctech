const mongoose = require('mongoose');

const WarrantySchema = new mongoose.Schema({
    startDate:String,
    endDate:String,
    serialNumber:{
       type: String,
       unique:true,
       required:true
    },
    productInfo:{type: mongoose.Schema.Types.ObjectId, ref: 'products' }
},{timestamps:true})

module.exports = mongoose.model("Warranty",WarrantySchema)