//creating mini express app

import exp from 'express';
import {ProductModel} from '../models/productModels.js'

export const productApp=exp.Router();



//creating a new product

productApp.post("/products",async (req,res)=>{
    //get new product details from req body
    const newProduct=req.body;
    //creating new product document
    const newProductDocument=new ProductModel(newProduct);
    //saving the doc.
    const result=await newProductDocument.save();
    console.log("Result :",result)
    //sending response
    res.status(201).json({message:"Product added"})

})



//getting all products

productApp.get("/products",async(req,res)=>{
    //getting all the products 
    let productList=await ProductModel.find()
    //sending response
    res.status(201).json({message:"Products :",payload:productList})
})



//getting products by id

productApp.get("/products/:id",async(req,res)=>{
    //get id
    let pid=req.params.id;
    //find according to id
    let product=await ProductModel.findOne({productId:pid})
    //send response
    if(!product){
        return res.status(404).json({message:"Product not found"})
    }
    res.status(201).json({message:"Product with given ID",payload:product})
})


//updating a product by its id
productApp.put("/products/:id",async(req,res)=>{
    //get that id
    const modifiedProduct=req.body
    let pid=req.params.id;
    //find and update
    const updatedProduct=await ProductModel.findOneAndUpdate({productId:pid},{$set:{...modifiedProduct}},{new: true,runValidators:true})
    //sending response
    res.status(201).json({message:"Product updated",payload:updatedProduct})
})



//deleting a product by id
productApp.delete("/products/:id",async(req,res)=>{
    //get that id
    let pid=req.params.id;
    //find and delete
    let deletedProduct=await ProductModel.findOneAndDelete({productId:pid})
    //sending response
    if(!deletedProduct){
        return res.status(404).json({message:"Product not found"})
    }
    res.status(201).json({message:"Product deleted",payload:deletedProduct})
})
