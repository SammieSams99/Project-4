// CREATED userSchema:
const mongoose = require('mongoose')
const Schema = mongoose.Schema


// define our schema - a blueprint of what a USER should look like
const userSchema = new Schema({
    name: { type: String, 
            required: true },
    email: {type: String, 
            required: true , 
            unique: true, },
    password: { type: String, 
                required: true,
                minlength: 7,
                maxlength: 12 }

})


// USE THE SCHEMA TO CREATE A MODEL
const User = mongoose.model('User', userSchema)

// MODULE.EXPORTS STATEMENT
module.exports = User