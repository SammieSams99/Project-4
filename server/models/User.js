// require statements
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// define our schema - a blueprint of what an article
const userSchema = new Schema({
    // set a prop called title and we make sure it:
    //  - is a string
    //  - exists (is required)
    //  - is unique
    name: { type: String, 
            required: true },
    email: {type: String, 
            required: true , 
            unique: true, },
    body: String,
    password: { body: String, 
                required: true,
                min: 7,
                max: 12 }

})


// use the schema to create a Model
const User = mongoose.model('User', userSchema)

// module.exports statement
module.exports = User