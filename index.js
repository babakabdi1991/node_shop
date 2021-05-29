// import modules
const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

//config express server : create a server and manage it by app
const app = express()
const server = http.createServer(app)

//config .env file
dotenv.config()

//config body of request
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// connect to DB
mongoose.connect(process.env.DATABASE_URL + process.env.DATABASE_NAME , {useNewUrlParser: true, useUnifiedTopology: true})

//start server
server.listen(process.env.PORT , process.env.HOST , ()=>{
    console.log("server is running on port" + process.env.PORT)
})