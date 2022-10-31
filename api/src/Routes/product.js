const {Router}= require('express')

const {getProduct,postProduct} = require("../controllers/productControllers");

const routerProduct= Router();

routerProduct.post("/product",postProduct);
routerProduct.get("/product",getProduct);

module.exports=routerProduct ;