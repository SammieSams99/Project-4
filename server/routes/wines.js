// CREATING WINES ROUTES WITH CRUD FUNCTIONALITY
const express = require('express')
const router = express.Router()


// ALL USERS WINE ENTRIES
router.get('/',(req, res) => {
    res.send("Get All Wines")
})

// CREATE NEW WINE
    //POST
router.post('/', (req,res) => {
    // USING THE WINE MODEL SAVE REQ.BODY TO THE DB
    // RETURN THE LIST OF WINES
})

// UPDATE WINE BY ID
    // PUT
router.put('/:id', (req,res) => {
     res.send(`Update a Wine ${req.params.id}`)
})

// // ONE OF THE USERS WINE ENTRIES FOUND BY ID
    // GET BY ID
router.get("/:id", (req,res) => {
    res.send(`Get one by id  ${req.params.id}`)
})

//  DELETE/DESTROY WINE BY ID
    // DELETE
router.delete('/:id', (req, res) => {
     res.send(`Update a wine ${req.params.id}`)
})



module.exports = router