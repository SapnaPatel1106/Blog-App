const blogModelSchema=require('../models/blogModelSchema');
const userModelSchema = require('../models/userModelSchema');
const commentModelSchema=require('../models/commentModelSchema')


const addBlog= async (req,res) =>{
    const id=req.params.userId;
    try{
        const blogAdd = await new blogModelSchema(req.body)
        // const filePath=`/uploads/${req.file.filename}`;
        // blogAdd.blogPic= filePath;
        try{
            const Blog = await blogAdd.save();
            res.status(201).json({
                success:"success",
                message:"Blog post successfully",
            })
        }catch(err){
            res.status(400).json({
                success:"failure",
                message:"Error occur"+err.message,
            });
        }
    }catch(err){
        res.status(400).json({
            success:"failure",
            message:"Error occur"+err.message,
        });
    }
}

const blogList = async (req,res)=>{
    try{
        const blogList = await blogModelSchema.find();
        res.status(200).json({
            success:"success",
            message:"Blog List are : ",
            data: blogList,
        });

    }catch(err){
        res.status(400).json({
            success:"failure",
            message:"Error occur "+err.message
        });
    }
}

const blogDetails = async (req,res) =>{
    const id=req.params.id;
    try{
        const blogDetail = await commentModelSchema.findOne({blogId:req.params.id})
       .populate({
            path:"userId",
            select:"userName profilePic city"
        }).populate({
            path:"blogId",
            
        });
        
        res.status(200).json({
            success:"success",
            blogDetail: blogDetail,
        })
    }catch(err){
        res.status(400).json({
            success:"success",
            message:"Error occur "+err.message
        });
    }
}

const blogLikes = async (req,res)=>{
    const id=req.params.id
    const {blogLikes}=req.body
    try{
        const likes = await blogModelSchema.findById(id)
        if(blogLikes=="true"){
            await likes.updateOne({$set:{blogLikes:++likes.blogLikes}})
            res.status(200).json({
                success:"success",
                message:"You liked the blog",
                likeBlog:likes.blogLikes
            })
        }else{
            if(likes.blogLikes<0){[
                await likes.updateOne({$set:{blogLikes:0}})
            ]}
            else{
                await likes.updateOne({$set:{blogLikes:--likes.blogLikes}})
                res.status(200).json({
                success:"success",
                message:"You unliked the blog",
                unlikeBlog:likes.blogLikes
            })
            }
            
        }
    }catch(err){
        res.status(400).json({
            success:"failure",
            message:"Error occur "+err.message
        });   
    }
    
}

const blogSearch = async (req,res)=>{
    const blogTitle = req.body.blogTitle
    try{
        const query = {blogTitle : {$regex: blogTitle,$options: "i"}}
        const searchData = await blogModelSchema.find(query)
        if(searchData){
        res.status(200).json({
            success : "success",
            message: "Here is the blog by title",
            blogs: searchData,
        })
    }else{
        res.status(400).json({
            success : "failure",
            message : "not found blog by this title"
        })
    }
    }catch(err){
        res.status(500).json({
        success : "failure",
        message : err.message
    });
    }
}

const myBlog = async (req,res)=>{
    const _id =req.params.id;
    try{
        const myBlogs = await blogModelSchema.find({userId : _id})
        .populate({
            path:"userId",
            select:"userName blogImage "
        });
        
        res.status(200).json({
            success: "success",
            message : "Here is the blog",
            data: myBlogs,
        })
    }catch(err){
        res.status(400).json({
            success:"failure",
            message:"Error occur "+err.message
        });
    }
}

const editBlog = async (req, res) => {
    const id = req.params.id;
    try {
        const updateBlog = await blogModelSchema.findByIdAndUpdate(id, { $set: req.body });
        updateBlog.save();
        res.status(201).json({
            success: "success",
            message: "Thanku for your blog.Your blog edited successfully"
        });
    } catch (err) {
        res.status(400).json({
            success: "failure",
            message: "error occur" + err.message
        });
    }
}

//delete blog api

const deleteBlog = async (req, res) => {
    const id = req.params.id;
    try {
        const deleteBlog = await blogModelSchema.findByIdAndDelete(id, { $set: req.body });
        res.status(200).json({
            success: "success",
            message: "Your blog successfully deleted"
        })
    } catch (err) {
        res.status(400).json({
            success: "failure",
            message: err.message
        })
    }
}


module.exports ={
    addBlog,
    blogList,
    blogDetails,
    blogLikes,
    blogSearch,
    editBlog,
    myBlog,
    deleteBlog
}