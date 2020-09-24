const mongoose = require('mongoose')
const Schema = mongoose.Schema

// define our schema - a blueprint of what a wine entry should look like
const wineSchema = new Schema({
    // set a prop called wines and we make sure it:
    name: { type: String, required: true, unique: true },
    region: { type: String, required: true },
    vintage: {type: Date, required: true},
    recommended: {type: Boolean},
    notes: {type:String},
    comments: [{ body: String, commentDate: Date.now}],
    starRating: { type: Number, min:0, max:10 },
})


// use the schema to create a Model
const Wine = mongoose.model('Wine', wineSchema)

// module.exports statement
module.exports = Wine
