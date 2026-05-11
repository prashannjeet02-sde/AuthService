const dotenv = require("dotenv")
dotenv.config()
const{Sequelize}=require("sequelize")
const app = require("./app")

// Database Configuration
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect:"mysql"
})

// DB Connection
async function DBConnect() {
    try {
        await sequelize.authenticate()
        console.log("DB Connection is Successful")
    } catch (error) {
        console.error("DB Connection failed",error)
    }
}

// Server Connection 
app.listen(process.env.PORT, () => {
    console.log(`Server is listening to PORT:${process.env.PORT}`)
    DBConnect()
})