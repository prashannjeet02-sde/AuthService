const v1Route = require("./v1/index")

const express = require("express")

const auth = express.Router()

auth.use("/v1", v1Route)

module.exports=auth