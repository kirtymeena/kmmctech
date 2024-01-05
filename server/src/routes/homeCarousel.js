const router = require('express').Router();
const homecarousel = require("../models/homeCarousel");

router.get("/sliderImages",async(req,res)=>{
    try{
        res.header("Access-Control-Allow-Origin", "*");
        const sliderData = await homecarousel.find();
        if(sliderData){
            sliderData.sort((a,b)=>a.sortOrder-b.sortOrder)
            res.status(200).json(sliderData)
        }else{
            res.status(404).json({ message: "Products not found" });
        }

    }
    catch(err){
        res.status(500).json({ message: "Internal server error" });
    }
})

module.exports = router