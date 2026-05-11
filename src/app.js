const express = require("express")
const app = express()

const routes=require("./routes/index")

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.text())

// Testing Route 
app.use("/test", (req, res) => {
    return res.json({success:true,message:"Service is Up"})
})

// Auth Routes
app.use("/api",routes)


module.exports=app