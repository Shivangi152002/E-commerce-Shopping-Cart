// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const shortid = require("shortid");


// const app = express();
// app.use(bodyParser);
// mongoose.connect("mongodb://localhost/react-app-dp",{
// useNewUrlParser: true,
// useCreateIndex:true,
// useUnifiiedTopology:true,
// });

// const Product=mongoose.model("products",new mongoose.schema({
 
//     id: { type:shortid.generate },
//     title:String,
//     description:String,
//     image:String,
//     price:Number,
//     availableSizes:[String],

// })
// );

// app.get("/api/products", async (req,res)=>{
  
// const products = await Product.find({});
// res.send(products);
   

// });

// app.post("/api/product",async (req,res)=>{
//     const newProduct = new Product(req.body);
//     const savedProduct = await newProduct.save();
//     res.send(savedProduct);
// });

// app.delete("/api/products/:id",async(req,res)=>{
 
//     const deletedProduct =await Product.findByIdAndDelete(req.params.id);
//     res.send(deletedProduct)
// });


// const port = process.env.port || 5000;
// app.listen(port,()=>console.log("serve at http://localhost:5000"));
