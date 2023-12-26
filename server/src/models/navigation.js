const mongoose = require('mongoose');

const navigationSchema = new mongoose.Schema({
    label:String,
    root:Boolean,
    subRoot:Boolean,
    isExpandable:Boolean,
    items:Array
})

module.exports = mongoose.model("navigations",navigationSchema)