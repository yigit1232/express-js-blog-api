const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const postSchema = new mongoose.Schema({
    author:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    title:{type:String,required:true,trim:true},
    content:{type:String,required:true,trim:true},
    comments:[{type:mongoose.Schema.Types.ObjectId,ref:'Comment'}],
    tags:[{type:mongoose.Schema.Types.ObjectId,ref:'Tag'}],
    category:{type:mongoose.Schema.Types.ObjectId,ref:'Category'},
    slug:{type:String,slug:'title',unique:true,slug_padding_size:1,trim:true},
    createdAt:{type:Date,default:Date.now()}
})

const Post = mongoose.model('Post',postSchema)

module.exports=Post