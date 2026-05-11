const { controllerCreateUser } = require("../../controller/user.controller")

const express = require("express")
const userRoute = express.Router()

userRoute.post("/",controllerCreateUser)

module.exports=userRoute