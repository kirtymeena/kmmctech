const router = require('express').Router();
const Nav = require("../models/navigation");
const cors = require("cors");

router.get("/navItems" ,cors(),async(req,res)=>{
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