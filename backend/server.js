const express = require('express')
const http = require('http')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())


// Database Connection
connectDB();

// Create Server
const server = http.createServer(app)

server.listen(PORT, ()=> {
    console.log(`Server is running on port : ${PORT}`)
})