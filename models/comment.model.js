const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)


const commentSchema = new mongoose.Schema({
    author:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    content:{type:String,required:true,trim:true},
    post:{type:mongoose.Schema.Types.ObjectId,ref:'Post'}
})

const Comment = mongoose.model('Comment',commentSchema)

module.exports=Comment