const express = require("express")
const connectDB = require("./config/db")
const dotenv = require("dotenv").config()
const port = 5000

//conexion à la DB
connectDB()

const app = express()

//middleware traite les données de la request
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/post", require("./routes/post.routes"))

//lacer le server
app.listen(port, () => console.log("Le server a démarré au port " + port));
