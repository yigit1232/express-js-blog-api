const mongoose = require('mongoose')
const host = process.env.DATABASE_HOST
const name = process.env.DATABASE_NAME

mongoose.connect(`mongodb://${host}/${name}`)
.then(result=>{
    console.log('Db connection successfully')
})
.catch(e=>{
    console.log(e)
})