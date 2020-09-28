// AUTH ROUTE? USER LOGIN/REGISTER/LOGOUT
const express = require('express')
const router = express.Router()
const User = require("../models/User")


// LOGIN

router.post("/register", (req, res) => {
    console.log(req.body, 'Register')
    // validate the POSTed data - making sure we have a name, on email, a pw
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.json({
            message: 'Please enter a name, an email and a password'
        })
    }
    console.log("fields are not empty")
    // make sure the user doesn't already exist
    User.findOne({ email: email }).then(  (foundUser) => {
        console.log("foundUser", foundUser)
    

        if (foundUser) return res.json({
            message: 'A user with that email already exists'
        })

        // if the user doesn't exist, create and save a user to the DB
        User.create({
            name,
            email,
            password
        })
        .then(newUser => {
            // let token = jwt.sign(newUser.toJSON(), process.env.JWT_SECRET, {
            //     expiresIn: 60 * 60 * 8
            // });
            res.send({ newUser });
        }).catch(error => console.log(error))
        
    }).catch(error => console.log(error))
})

// DELETE/DESTROY USERS COOKIES ON LOGOUT
// changing to GET to check functionality
// BUILD OUT A POST ROUTE
// FIND USER , CHECK IF PW MATCHS PW IN DB AND THEN Response.SEND USER IF NO ERROR
// router.post('/logout', (req, res) => {
//     res.send("Logout Page")
// })
const logout = (req, res) => {
    if (!req.user) return res.json({
      message: 'No User to log out'
    })
  
    req.logout()
    res.json({ message: "User logged out" })
}



module.exports = router