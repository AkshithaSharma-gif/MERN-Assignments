import jwt from 'jsonwebtoken'
const {verify}=jwt


export function verifyToken(req,res,next){
    //token verification logic
    //to access cookies property of request object we need cookie parser middleware.
    //if not req.cookies is undefined
    //for that npm install cookie-parserand next make changes in server.js
    
    const token=req.cookies?.token
    //console.log("Token obj is:",req.cookies)
    //if token is from unauthorized user
    if(!token){
        return res.status(401).json({message:"Login and Please try again"})
    }

    //if token is existed
    try{
    const decodedToken=verify(token,'abcd')
    console.log(decodedToken);
    //attach dedcoded user to req
    req.user=decodedToken
    next();
    }
    catch(err){
        res.status(401).json({message:"Session expired.Try to Log in again"})
    }
}