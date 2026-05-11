const { controllerCreateUser,controllerGetUserById,controllerGetAllUser,controllerUpdateUser,controllerDeleteUser } = require("../../controller/user.controller")

const express = require("express")
const userRoute = express.Router()

userRoute.post("/", controllerCreateUser)
userRoute.get("/:id", controllerGetUserById)
userRoute.get("/", controllerGetAllUser)
userRoute.patch("/:id", controllerUpdateUser)
userRoute.delete("/:id",controllerDeleteUser)

module.exports=userRoute