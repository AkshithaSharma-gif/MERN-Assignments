//entry point of the backend

//create express ap

import exp from 'express'
import {connect} from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import { productApp } from './APIs/ProductAPI.js'
import cookieParser from "cookie-parser"
import {config} from 'dotenv'

config();           //process.env.PORT , process.env.PORT

const app=exp()
//add body parser

app.use(cookieParser())
//add cookie parser

app.use(exp.json())


//forward req to UserApp if path starts with /user-api and productApp if path is /product-api
app.use("/user-api",userApp)
app.use("/product-api",productApp)

//port number
const port=process.env.PORT || 4000

async function connectDB(){
    try{
        await connect(process.env.DB_URL);
        console.log("DB connection succesfull");
        //start server
        app.listen(port,()=>console.log("server on port 4000.."))
    }
    catch(err){
        console.log("Error in db connection :",err);
    }
}

connectDB();



//error handling middleware(must be present at the end of the file only) - only exectes when error is occured
app.use((err,req,res,next)=>{
    console.log(err.name)
    //validation error
    if(err.name==='ValidationError'){
        return res.status(400).json({message:"Error",error:err.message})
    }
    //cast error
    if(err.name==='CastError'){
        return res.status(400).json({message:"Error",error:err.message})
    }

    //send server side errors
    res.status(500).json({message:"Error from server side",error:err.message})
})