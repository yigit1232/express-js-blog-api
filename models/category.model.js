const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const categorySchema = new mongoose.Schema({
    category:{type:String,required:true,trim:true},
    categorySlug:{type:String,slug:'category',slug_padding_size:1,unique:true}
})

const Category = mongoose.model('Category',categorySchema)

module.exports=Category