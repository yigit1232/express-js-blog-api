const Post = require('../models/post.model')
const Comment = require('../models/comment.model')

const addComment = async(req,res)=>{
    try {
        const newComment = new Comment(req.body)
        await newComment.save()
        const post = await Post.findById(req.body.post)
        post.comments.push(newComment)
        await post.save()
        console.log(post)
        return res.json(newComment).status(201)
    }catch (e) {
        console.log(e)
    }
}

const getPosts = async(req,res)=>{
    try{
        const posts = await Post.find({})
            .populate('tags','tag tagSlug')
            .populate('category')
            .populate('author','username')
            .populate({path:'comments',populate:{path:'author',select:'username content'}})
        return res.json(posts).status(200)
    }catch (e) {
        console.log(e)
    }
}

module.exports={getPosts,addComment}