// AUTH ROUTE? USER LOGIN/REGISTER/LOGOUT
const express = require('express')
const router = express.Router()


// LOGIN
router.get('/login',(req, res) => {
    res.send("User Login")
})


// // get 1 wine (getwinebyid)
// // Choose Single Wine Route
router.get("/register", (req,res) => {
    res.send("Register User")
})

// DELETE/DESTROY USERS COOKIES ON LOGOUT
    // changing to GET to check functionality
router.get('/logout', (req,res) => {
     res.send("Logout Page")
}) 



module.exports = router