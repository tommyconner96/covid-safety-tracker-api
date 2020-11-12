const express = require("express")
const helmet = require("helmet")
const cookieParser = require("cookie-parser")
const placesRouter = require("./routers/placesRouter")
const server = express()

require('dotenv').config()
server.use(helmet())
server.use(cookieParser())
server.use(express.json())

server.use("/places/", placesRouter)

server.get("/", (req, res, next) => {
    res.status(200).json({
        message: "hi hello welcome",
    })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong",
    })
})

module.exports = server