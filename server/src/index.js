const express = require("express")
const app = express();
const router = require("express").Router();

const cors = require("cors");
require("./db/connection")
const navigation = require("./routes/navigation");
const homeCarousel = require("./routes/homeCarousel");
const products = require("./routes/products");
const port = process.env.PORT || 5000

app.use(cors({
    origin:['*'],
    method:['POST','GET']
}))
app.use(express.json())
app.get("/",(req,res)=>{
   res.json("server's up")
})
app.use("/api/v1",navigation);
app.use("/api/v1",homeCarousel);
app.use("/api/v1",products);

app.listen(port, () => {
    console.log(`server is up on ${port}`)
})
