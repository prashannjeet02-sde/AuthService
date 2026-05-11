const { User } = require("../models/index")

class UserRepository{
    async createUser(data) {
        const user = await User.create(data)
        return user
    }
}

module.exports=UserRepository