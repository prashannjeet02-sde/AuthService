const userRoute = require("./user.routes")
const express = require("express")

const v1 = express.Router()

v1.use("/signup",userRoute)
module.exports=v1