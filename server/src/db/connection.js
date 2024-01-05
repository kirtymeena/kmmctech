const mongoose = require("mongoose")
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, '../../.env') })
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("======================= db connection successfull! ================="))
    .catch(error => console.log(error))