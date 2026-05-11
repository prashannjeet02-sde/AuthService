const express = require("express")
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.text())

// Testing Route 
app.use("/test", (req, res) => {
    return res.json({success:true,message:"Service is Up"})
})


module.exports=app