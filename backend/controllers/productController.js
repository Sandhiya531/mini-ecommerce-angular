const productModel = require('../models/productModel');

//Get Products API (/api/v1/products/) - Get all Products
exports.getProducts = async (req,res,next) =>{

    //Search Product with name - /api/v1/products?keyword=oppo
    const query = req.query.keyword ? {name:{
                $regex: req.query.keyword,
                $options:'i' // no case sensitive
            }
        }:{}   

    const products = await productModel.find(query);
    res.json({
        success:true,
        products
    })
}

//Get Single Products API (/api/v1/product/:id) 
exports.getSingleProduct = async (req,res,next) =>{
    try{
        const product = await productModel.findById(req.params.id);
        res.json({
            success:true,
            product
        })
    }catch(error){
        res.status(404).json({
            success:false,
            message: 'Unable to get Product with that ID'
        })
    }
    
}