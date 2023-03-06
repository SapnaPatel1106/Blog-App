const mongoose = require('mongoose')


const commentModelSchema = new mongoose.Schema({
    blogComment: {
        type: String,
        required: true,
    },
    blogId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'blog'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true,
    },
})

commentModelSchema.set('timestamps', true)
module.exports = mongoose.model('comment', commentModelSchema)
