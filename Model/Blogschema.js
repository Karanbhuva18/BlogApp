const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:20
        },
        description:{
            type:String,
            required:true,
            maxLength:1000
        },
        Likes:{
            type:Number,
            required:true,
            maxLength:2,
        },
        comments: [{
            type: String,
            required: true,
            maxlength: 70
        }],
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now()
        }
       
    
});

module.exports = mongoose.model("Blogs",blogSchema)