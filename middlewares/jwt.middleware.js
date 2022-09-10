const jwt = require('jsonwebtoken')

module.exports=jwtMiddleware=(req,res,next) =>{
    try{
        if(req.headers.authorization){
            const token = req.headers.authorization.split(" ")[1]
            jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
                if(err){
                    console.log(err.name)
                    if(err.name==="TokenExpiredError"){
                        return res.json({error:'Token expired.'}).status(405)
                    }else if(err.name==="JsonWebTokenError"){
                        return res.json({error:'Invalid token.'}).status(405)
                    }else if(err.name==="NotBeforeError"){
                        return res.json({error:'Token not active'}).status(405)
                    }
                }else{
                    next()
                }
            })
        }else{
            next()
        }
    }catch (e){
        console.log(e)
    }
}