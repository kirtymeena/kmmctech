const express = require("express")
const app = express();
const router = require("express").Router();

const cors = require("cors");
require("./src/db/connection")
const navigation = require("./src/routes/navigation");
const homeCarousel = require("./src/routes/homeCarousel");
const products = require("./src/routes/products");
const port = process.env.PORT || 5000

app.use(cors({
    origin:'kmmctech.vercel.app',
    method:['POST','GET']
}))
app.use(express.json())
app.get("/",(req,res)=>{
   res.json("server's up")
})
app.use(navigation);
app.use(homeCarousel);
app.use(products);

app.listen(port, () => {
    console.log(`server is up on ${port}`)
})
