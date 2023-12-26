const router = require('express').Router();
const homecarousel = require("../models/homeCarousel");

router.get("/sliderImages",async(req,res)=>{
    try{
        const sliderData = await homecarousel.find({});
        if(sliderData){
            sliderData.sort((a,b)=>a.sortOrder-b.sortOrder)
            res.status(200).json(sliderData)
        }
        res.status(400)
    }
    catch(err){
        res.status(500)
    }
})

module.exports = router