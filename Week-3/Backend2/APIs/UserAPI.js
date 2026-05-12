//create mini express app(separate route)--{mini - because here http instance is not needed}

import exp from 'express'
import {UserModel} from '../models/userModel.js'
import {hash,compare} from 'bcryptjs'
import {verifyToken} from '../middlewares/verifyToken.js'
import {config} from 'dotenv'

import jwt from 'jsonwebtoken'
const {sign}=jwt

export const userApp=exp.Router()




//user login

userApp.post("/auth",async (req,res)=>{
    const {email,password}=req.body;
    //verify email
    let user=await UserModel.findOne({email:email})
    if(!user){
        return res.status(404).json({message:"Invalid Email"})
    }
    //compare the passwords
    let result=await compare(password,user.password)
    if(result===false){
        return res.status(400).json({message:"Invalid password"})
    }

    //if password is matched
    //create token (jsonwebtoken - jwt---jaat)
    //npm install json webtoken
    const signedToken=sign({email:user.email},process.env.SECRET_KEY,{expiresIn:"1h"})                        //'abcd' here is a secret key which we can change accordingly and 100 is the seconds for validity
    //store token as httponly cookie
    res.cookie("token",signedToken,{
        httpOnly:true,
        sameSite:"lax",
        secure:false,
    })
    //send response
    res.status(200).json({message:"Login success",payload:user})
})







//Define USER REST APIS

//create new user
userApp.post("/users",async (req,res)=>{                                      //async bcoz all db operations are asynchrounos
    //get new user obj from req
    const newUser=req.body
    //hash the password
    const hashedPassword=await hash(newUser.password,10)                     //10 is the costfactor(no.of hasges to be done)
    //replace password with hashed password
    newUser.password=hashedPassword
    //create new user document
    const newUserDocument=new UserModel(newUser)
    //save
    const result=await newUserDocument.save()
    console.log("result :",result)
    //send response
    res.status(201).json({message:"User created"})                                 //201 says succesfully operation done

})




//read all users
userApp.get("/users",verifyToken,async(req,res)=>{                              //verifytoken is a verifyToken middleware ----> now this is a protected route
    //read all users
    let userList=await UserModel.find()
    //send res
    res.status(200).json({message:"Users:",payload:userList})
})


/*
//this has zero security bcoz anyone can access any details

//read users by object Id
userApp.get("/users/:id",verifyToken,async(req,res)=>{
    //read obj id from req params`
    const uid=req.params.id
    //find user by id
    const userObj=await UserModel.findOne({_id:uid})
    //if user not found
    if(!userObj){
        return res.status(404).json({message:"User not found"})
    }
    //if user is found....send res
    res.status(200).json({message:"User of mentioned object ID",payload:userObj})
})

*/

//use findOne() to read a document with non object id fields
//use findById() to read document with object ID
//use findByIdAndUpdate() to do two tasks at a time - returns the modified document


userApp.get("/user",verifyToken,async(req,res)=>{
    //take email of user from body
    const userEmail=req.user?.email
    //find user by id
    const userObj=await UserModel.findOne({email:userEmail}).populate("cart.product")  //prints thr product document also
    //if user not found
    if(!userObj){
        return res.status(404).json({message:"User not found"})
    }
    //if user is found....send res
    res.status(200).json({message:"Logged in User :",payload:userObj})
})



//update user by Id
userApp.put("/users/:id",verifyToken,async(req,res)=>{
    //get modified user
    const modifiedUser=req.body
    const uid=req.params.id;
    //find and update user
    const updatedUser=await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new: true,runValidators:true});
    //send response
    res.status(201).json({message:"User Modified",payload:updatedUser})
})


//delete user by Id
userApp.delete("/users/:id",verifyToken,async(req,res)=>{
    //get user id
    const uid=req.params.id;
    //find and delete 
    let deletedUser=await UserModel.findOneAndDelete({_id:uid})              //findByIdAndDelete(uid,{_id:uid})
    if(!deletedUser){
        return res.status(404).json({message:"User not found"})
    }
    res.status(201).json({message:"User Deleted",payload:deletedUser})
})




//add product to the cart
userApp.put('/cart/product-id/:pid',verifyToken,async(req,res)=>{
    //get product id
    let productid=req.params.pid;
    //get current user details
    const userEmail=req.user?.email
    const user=await UserModel.findOne({email:userEmail})
    //if user does not exist
    if(!userEmail){
        return res.status(404).json({message:"User not found"})
    }
    //add product to cart
    let result=await UserModel.findOneAndUpdate({email:userEmail},{$push:{cart:{product:productid}}})
    console.log(result)
    res.status(200).json({message:"product added to cart"})
})


//enhancement pending



//app.use(VerifyToken)--------->middleware executes for all the routes
//userApp.get(path,verifyToken,req-handler)---------->route level middleware executed for specific route(here is is get)



//add product to the cart
userApp.put('/cart/product-id/:pid',verifyToken,async(req,res)=>{
    //get product id
    let productid=req.params.pid;
    //get current user details
    const userEmail=req.user?.email
    const user=await UserModel.findOne({email:userEmail})
    //if user does not exist
    if(!userEmail){
        return res.status(404).json({message:"User not found"})
    }
    let found=user.cart.find(arr=>arr._id===productid)
    console.log(found)
    if(!found){
    //add product to cart
    let result=await UserModel.findOneAndUpdate({email:userEmail},{$push:{cart:{product:productid}}})
    console.log(result)
    }
    else {
        let p=user.cart.find(arr=>arr._id===productid)
        p.count++
    }
    res.status(200).json({message:"product added to cart"})
})