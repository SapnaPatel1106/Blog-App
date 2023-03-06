const mongoose = require('mongoose');

const commentModelSchema=require('../models/commentModelSchema')
const blogModelSchema= require('../models/blogModelSchema')


const addComment = async (req, res) => {
    //const { blogComment, userId, blogId } = req.body;
    //const id =req.params.userId;

    try {
        let body ={...req.body,userId:req.params.userId,blogId:req.params.blogId}
        const addComment = new commentModelSchema(body) ;
        const comment = new commentModelSchema(body)
        await comment.populate({
            path: "userId",
            select: "userName "
        });
        let comments = await comment.save();
        res.status(201).json({

            success: "success",
            message: "Comment added successfully",
            com: comments,

        });
    } catch (err) {
        res.status(400).json({
            success: "failure",
            messgae: "Error occur" + err.message
        })
    }
}


module.exports = {
    addComment
}
