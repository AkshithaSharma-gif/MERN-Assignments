//creating Product Schema
import {Schema,model} from "mongoose"

const productSchema=new Schema({
    productId:{
        type:String,
        required:[true,"Product ID is required"],
        unique:[true,"Product already exists"]
    },

    productName:{
        type:String,
        required:[true,"Product Name required"]
    },

    price:{
        type:Number,
        required:[true,"Price is required"],
        min:[10000,"Price must be more than 10000"],
        max:[50000,"Price must not exceed 50000"]
    },

    brand:{
        type:String,
        required:[true,"Brand is required"]
    }
},{
    versionKey:false,
    timestamps:true
})


//generating user model
export const ProductModel=model("product",productSchema)