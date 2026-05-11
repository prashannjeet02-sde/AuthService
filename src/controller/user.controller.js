const userService = require("../services/user.service")

const User = new userService()

const controllerCreateUser = async (req, res) => {
    try {
        const user = await User.serviceCreateUser({
            userName: req.body.userName,
            email: req.body.email,
            password:req.body.password
        })
        return res.status(201).json({success:true,message:"User Created",data:user})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerGetUserById = async (req, res) => {
    try {
        const userId = req.params.id 
        const response = await User.serviceGetUserById(userId)
        return res.status(200).json({success:true,message:"User Details",data:response})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerGetAllUser = async (req, res) => {
    try {
        const allUser = await User.serviceGetAllUser()
        return res.status(200).json({success:true,message:"All Users",data:allUser})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

const controllerUpdateUser=async(req,res)=>{
    try {
        const userId = req.params.id 
        const dataToUpdate = {
            userName: req.body.userName,
            password:req.body.password
        }
        const modify = await User.serviceUpdateUser(userId, dataToUpdate)
        return res.status(200).json({success:true,message:"User Details Updated",data:modify})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Failed to update"})
    }
}

const controllerDeleteUser = async (req, res) => {
    try {
        const removeUser = await User.serviveRemoveUser(req.params.id)
        return res.status(200).json({success:true,message:"User deleted"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}

module.exports={controllerCreateUser,controllerGetUserById,controllerGetAllUser,controllerUpdateUser,controllerDeleteUser}