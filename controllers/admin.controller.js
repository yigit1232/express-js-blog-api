const Category = require('../models/category.model')
const Tag = require('../models/tag.model')
const Post = require('../models/post.model')

const addCategory = async(req,res)=>{
    try{
        const {category} = req.body
        if(!category){
            return res.json({error:'All fields are required.'}).status(405)
        }
        const newCategory = new Category({category:category})
        if(newCategory){
            await newCategory.save()
            return res.json(newCategory)
        }else{
            return res.json({error:'Unknown Error'}).status(405)
        }
    }catch (e){
        console.log(e)
    }
}
const deleteCategory = async(req,res)=>{
    try{
            await Category.findByIdAndDelete({_id: req.params.id})
            .then(result=>{return res.json({message:'Category delete.'}).status(200)})
            .catch(e=>{return res.json({error:'Category not found.'}).status(405)})
    }catch (e){
        console.log(e)
    }
}
const updateCategory = async(req,res)=>{
    try{
            await Category.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
            .then(result=>{return res.json({message:'Category update.'}).status(200)})
            .catch(e=>{return res.json({error:'Category not found.'}).status(405)})
    }catch (e){
        console.log(e)
    }
}

const addTag= async(req,res)=>{
    try{
        const {tag} = req.body
        if(!tag){
            return res.json({error:'All fields are required.'}).status(405)
        }
        const newTag = new Tag({tag:tag})
        if(newTag){
            await newTag.save()
            return res.json(newTag)
        }else{
            return res.json({error:'Unknown Error'}).status(405)
        }
    }catch (e){
        console.log(e)
    }
}
const deleteTag = async(req,res)=>{
    try{
        await Tag.findByIdAndDelete({_id: req.params.id})
            .then(result=>{return res.json({message:'Tag delete.'}).status(200)})
            .catch(e=>{return res.json({error:'Tag not found.'}).status(405)})
    }catch (e){
        console.log(e)
    }
}
const updateTag = async(req,res)=>{
    try{
        await Tag.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
            .then(result=>{return res.json({message:'Tag update.'}).status(200)})
            .catch(e=>{return res.json({error:'Tag not found.'}).status(405)})
    }catch (e){
        console.log(e)
    }
}

const addPost= async(req,res)=>{
    try{
        const newPost = new Post(req.body)
        if(newPost){
            await newPost.save()
            return res.json(newPost).status(201)
        }else{
            return res.json({error:'Unknown error'}).status(500)
        }
    }catch (e) {
        console.log(e)
    }
}
const deletePost = async(req,res)=>{
    try{
        const deletePost = await Post.findByIdAndDelete(req.params.id)
        return res.json({message:'Post deleted'}).status(200)
    }catch (e) {
        console.log(e)
    }
}
const updatePost = async(req,res)=>{
    try{
        const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json(post).status(200)
    }catch (e) {
        console.log(e)
    }
}

module.exports={
    addCategory,
    deleteCategory,
    updateCategory,
    addTag,
    deleteTag,
    updateTag,
    addPost,
    deletePost,
    updatePost
}