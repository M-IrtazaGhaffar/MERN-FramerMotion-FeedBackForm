const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    type:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
});

//Export the model
module.exports = mongoose.model('FeedBack', userSchema);