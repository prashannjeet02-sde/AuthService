const UserRepo = require("../repositories/user.repo")

class UserService{
    constructor() {
        this.userRepo=new UserRepo()
    }

    async serviceCreateUser(userData) {
        const user = await this.userRepo.createUser(userData)
        return user
    }
}

module.exports=UserService