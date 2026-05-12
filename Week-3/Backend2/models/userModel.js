//create user schema 
import {Schema,model,Types} from 'mongoose'


//create cart schema (product,count)               //product is separate schema

const cartSchema=new Schema({
    product:{
        type:Types.ObjectId,
        ref:"product"      //reference module which takes the name of the product model
    },
    count:{
        type:Number,
        default:1
    }
})






//(username,password,email,age)
//create user schema 
const userSchema=new Schema({
    //structure of user resource
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"Minimum length of username is 4 chars"]
    },

    password:{
        type:String,
        required:[true,"Password is required"]
    },

    email:{
        type:String,
        required:[true,"Email required"],
        unique:[true,"Email already exists"]                     //indexing will be done and search will be faster (it is not a validator it is an option)
    },
    age:{
        type:Number
    },
    cart:[cartSchema]
},{
    versionKey:false,                            //disables the version key (__v:0)
    timestamps:true                              //gives the created time and updated time
})




//generate userModel
export const UserModel=model("user",userSchema)

