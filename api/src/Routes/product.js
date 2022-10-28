const {Router}= require('express')

const {postProduct} = require("../controllers/productControllers");

const routerProduct= Router();

routerProduct.post("/product",postProduct);

module.exports={routerProduct} ;