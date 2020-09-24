// require statements
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const app = express()

// middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(helmet())
console.log(process.env.MONGODB_URL)

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection 

db.once('open', () => {
    console.log(`Connected to MongoDB...`);
  });
db.on("error", (err) => {
    console.log(`Database error:\n${err}`);
});

app.use("/wines", require("./routes/wines"))

app.listen(3001, () => {
    console.log('Listening on 3001');
})