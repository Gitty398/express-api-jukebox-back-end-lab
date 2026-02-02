
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const express = require('express')
const morgan = require('morgan')
const tracksController = require('./controllers/track.controller.js')
const cors = require('cors')

const app = express();

app.use(cors());
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on("connected", () => {
    console.log(`Connected to mongodb on ${mongoose.connection.name}`)
})

app.use(morgan("tiny"))

// Routes here

app.get("/", (req, res) => {
    res.json({ message: "test test test" })
})

mongoose.connection.on("error", (error) => {
    console.log(`Error with ${error.message}`)
})

app.use(express.json())


app.use("/tracks", tracksController)

app.listen("3000", () => console.log("Here on 3k"))