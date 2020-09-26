const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const User = require('./User')

// define our schema - a blueprint of what a wine entry should look like
const wineSchema = new Schema({
    // set a prop called wines and we make sure it:
    name: { type: String, required: true, unique: true },
    region: { type: String, required: true },
    vintage: {type: Date, required: true},
    recommended: {type: Boolean, required: true},
    notes: {type:String, required: true},
    comments: { type: String },
    starRating: { type: Number, required: true,  min:0, max:10 },
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})


// use the schema to create a Model
const Wine = mongoose.model('Wine', wineSchema)

// module.exports statement
module.exports = Wine
