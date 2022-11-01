const {Router}= require('express')
const {upload }= require('../config/multer.config')
const {getProduct,postProduct,deleteProduct} = require("../controllers/productControllers");

const routerProduct= Router();

routerProduct.post("/product",upload,postProduct);
routerProduct.get("/product",getProduct);
routerProduct.delete('/product/:id',deleteProduct)
module.exports=routerProduct ;