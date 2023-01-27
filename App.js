const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const mongoose = require('mongoose')
const dotenv = require("dotenv").config()

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())




app.get('/', (req, res) => {
    res.send('GET request successful!');
});

let port = process.env.PORT
app.listen(port,()=>{
    console.log("Server Running Port " + port);
})




let DB=process.env.DB

mongoose.set('strictQuery', true);
mongoose.connect(DB)
 .then(()=>{
    console.log("Connected to database");
  })
  .catch(err => console.log("Database connection error"))




