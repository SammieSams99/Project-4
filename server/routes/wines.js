const express = require('express')
const router = express.Router()


router.get('/',(req, res) => {
    res.send("Get All Wines")
})

// get 1 wine (getwinebyid)
router.get("/:id", (req,res) => {
    res.send(`Get one by id  ${req.params.id}`)
})

// update 1 (getwinebyid)
// put

// delete wines (byid)
//  delete

// new/ create new wine 
// post

module.exports = router