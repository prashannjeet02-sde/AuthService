const { User } = require("../models/index")
const bcrypt = require("bcrypt")

class UserRepository{
    async createUser(data) {
        const user = await User.create(data)
        return user
    }

    async getUserById(userId) {
        const fetchUser = await User.findByPk(userId, {
            attributes:["userName","email"]
        })
        return fetchUser
    }

    async getAllUser() {
        const allUser = await User.findAll()
        return allUser
    }

    async updateUser(userId, userData) {
        const findUser = await User.findByPk(userId)
        if (!findUser) {
            throw new Error("No such user found")
        }
        if (userData.userName) {
            findUser.userName=userData.userName
        }
        if (userData.password) {
            const hash = bcrypt.hashSync(userData.password, 10)
            findUser.password=hash
        }
        await findUser.save(userData)
        return findUser
    }

    async removeUser(userId) {
        const remove = await User.destroy({
            where: {
                id:userId
            }
        })
    return remove
    }
}

module.exports=UserRepository