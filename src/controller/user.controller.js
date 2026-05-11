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

module.exports={controllerCreateUser}