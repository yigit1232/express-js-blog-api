const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const tagSchema = new mongoose.Schema({
    tag:{type:String,required:true,trim:true},
    tagSlug:{type:String,slug:'tag',slug_padding_size:1,unique:true}
})

const Tag = mongoose.model('Tag',tagSchema)

module.exports=Tag