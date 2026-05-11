const UserRepo = require("../repositories/user.repo")

class UserService{
    constructor() {
        this.userRepo=new UserRepo()
    }

    async serviceCreateUser(userData) {
        const user = await this.userRepo.createUser(userData)
        return user
    }

    async serviceGetUserById(userId) {
        const fetch = await this.userRepo.getUserById(userId)
        return fetch
    }

    async serviceGetAllUser() {
        const allUser = await this.userRepo.getAllUser()
        return allUser
    }

    async serviceUpdateUser(userId, userData) {
        const modifyUser = await this.userRepo.updateUser(userId, userData)
        return modifyUser
    }

    async serviveRemoveUser(userId) {
        const deleteUser = await this.userRepo.removeUser(userId)
        return deleteUser
    }
}

module.exports=UserService