const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user.model')

const login = async(req,res) => {
    try{
        const {username,password} = req.body
        const user = await User.findOne({username:username})
        if(user){
            const match = await bcrypt.compare(password,user.password)
            if(match){
                const token = jwt.sign({
                    id:user._id,
                    username:user.username,
                    email:user.email,
                    createdAt:user.createdAt,
                    isAdmin:user.isAdmin,
                    slug:user.slug
                },process.env.SECRET_KEY,{expiresIn: process.env.EXPIRES_IN})
                return res.json({message:'Success',token:token}).status(200)
            }else{
                return res.json({message:'Username or password wrong'}).status(405)
            }
        }else{
            return res.json({message:'Username or password wrong'}).status(405)
        }
    }catch (e) {
        console.log(e)
    }
}

const signup = async(req,res)=>{
    try{
        const {username,email,password,againPassword} = req.body
        const isUsername = await User.findOne({username:username})
        if(!username || !email || !password){
            return res.json({error:'All fields are required.'}).status(405)
        }
        else if(isUsername){
            return res.json({error:'Username is already taken.'}).status(405)
        }
        else if(password!==againPassword){
            return res.json({error:'Passwords does not match.'}).status(405)
        }
        const isMail = await User.findOne({email:email})
        if(isMail){
            return res.json({error:'Email is already taken.'}).status(405)
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new User({
            username:username,
            email:email,
            password:hashedPassword
        })
        if(newUser){
            await newUser.save()
            return res.json(newUser).status(201)
        }else{
            return res.json({error:'Unknown Error.'}).status(405)
        }
    }catch (e){
        console.log(e)
    }
}

module.exports={signup,login}