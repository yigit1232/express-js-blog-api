const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const userSchema = new mongoose.Schema({
    username:{type:String,unique:true,trim:true,required:true},
    email:{type:String,unique:true,trim:true,required:true},
    password:{type:String,trim:true,required:true},
    createdAt:{type:Date,default:Date.now()},
    isAdmin:{type:Boolean,default: false},
    slug:{type:String,slug:'username',slug_padding_size:1,unique:true,trim:true}
})

const User = mongoose.model('User',userSchema)

module.exports=User