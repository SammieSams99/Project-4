const express = require('express')
const router = express.Router()


// All Users Wines Route
router.get('/',(req, res) => {
    res.send("Get All Wines")
})


// // get 1 wine (getwinebyid)
// // Choose Single Wine Route
router.get("/:id", (req,res) => {
    res.send(`Get one by id  ${req.params.id}`)
})

// // new/ create new wine 
//POST
// router.post('/new', (req,res) => {
//     res.send(`Update a wine ${req.params.id}`)
// })

// UPDATE/PUT
// router.put('/:id/edit' (req,res) => {
//      res.send(`Update a Wine ${req.body.id}`)
// })

// delete wines (byid)
//  DELETE
// router.delete('/:id, (req, res) => {
//      res.send(`Update a wine ${req.params.id}`)
// })



module.exports = router