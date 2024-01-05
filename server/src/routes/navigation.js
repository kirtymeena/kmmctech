const router = require('express').Router();
const Nav = require("../models/navigation");

router.get("/navItems",async(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    try{
        const navItems = await Nav.find({});
        if(navItems){
            res.status(200).json(navItems)
        }
        res.status(400)
    }
    catch(err){
        res.status(500)
        console.log(err)
    }
})

module.exports = router