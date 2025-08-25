// require("dotenv").config();
// console.log("MONGO_URL from env:", process.env.MONGO_URL);

// const mongoose = require('mongoose')
// mongoose.connect(process.env.MONGO_URL,{

// })
// .then(()=>console.log("conected to DB"))
// .catch((err)=>console.log("error in DB connection",err))
// console.log("ENV MONGO_URL =", process.env.MONGO_URL);


const express = require('express')
const app = express()
const port = 4000

app.use(express.json())

const notesRoutes = require("./routes/notes")
app.use("/notes",notesRoutes)

app.get('/', (req, res) => {
  res.send('Hello World! ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

