const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        username:{
            type:String,
            unique: true,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            unique: true,
            required:true
        },
        telephone:{
            type:Number,
            required:true
        },
        userType:{
            type:String,
            required:true
        },
        dateCreated:{
            type:Date
        },
        dateEdited:{
            type:Date
        }
    }
); 

const user = mongoose.model('Users', userSchema);
module.exports = user;