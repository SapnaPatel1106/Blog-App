const express = require('express');
const router=express.Router();

const blog=require('../controllers/blogController');
const {upload}=require('../middlewares/imageStorage')


router.post('/createblog/:id',upload.single("blogPic"),blog.addBlog);
router.get('/bloglist',blog.blogList)
router.get('/blogdetail/:id',blog.blogDetails)
router.patch('/bloglikes/:id',blog.blogLikes)
router.get("/searching",blog.blogSearch)
router.patch("/edit/:id",blog.editBlog)
router.post("/myblogs/:_id",blog.myBlog)
router.delete("/delete/:id",blog.deleteBlog)

module.exports = router;