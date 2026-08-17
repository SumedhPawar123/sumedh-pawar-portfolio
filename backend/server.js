const express = require('express')
const path = require('path')
const http = require('http')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const authRoute = require("./route/authRoute")
const skillsRoute = require('./route/skillsRoute')
const projectRoute = require('./route/projectRoute')
const contactRoute = require('./route/contactRoute')
dotenv.config()

const app = express()
const PORT = process.env.PORT 

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,
  })
);

// Database Connection
connectDB();

// APIS
app.get('/', (req, res)=>{
    res.send("portfolio look fine")
})
app.use("/api/auth", authRoute);
app.use("/api/skills", skillsRoute)
app.use('/api/projects', projectRoute)
app.use('/api/contacts', contactRoute)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Create Server
const server = http.createServer(app)

server.listen(PORT, ()=> {
    console.log(`Server is running on port : ${PORT}`)
})
