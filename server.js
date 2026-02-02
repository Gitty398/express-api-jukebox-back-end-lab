
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const express = require('express')
const morgan = require('morgan')
const tracksController = require('./controllers/track.controller.js')
const cors = require('cors')

const app = express()