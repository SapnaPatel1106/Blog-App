const express=require('express');
const router=express.Router();

const comment=require('../controllers/commentController')


router.post('/addcomment/:userId/:blogId',comment.addComment)

module.exports= router;