const mongoose = require('mongoose')
Schema = mongoose.Schema
      


const CommentsSchema = new Schema({
    content: {
        type: String,
        maxLength:160,
        require:true
    },
    author: {
        type: String,
        require:true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})


const Comments = mongoose.model('Comment', CommentsSchema)


module.exports = Comments