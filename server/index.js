// require statements
const express = require('express')
const app = express()

// middleware
app.set('view engine', "ejs")
// app.use(bodyParser.urlencoded({extended: false}))



app.listen(3000, () => {
    console.log('Listening on 3000');
})