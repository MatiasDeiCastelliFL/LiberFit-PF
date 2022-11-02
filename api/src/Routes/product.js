const {Router}= require('express')
const {upload }= require('../config/multer.config')
const {getProduct,postProduct,deleteProduct} = require("../controllers/productControllers");
const {isAuthenticated}= require('../Helpers/auth')
const routerProduct= Router();

routerProduct.post("/product",isAuthenticated,postProduct);
routerProduct.get("/product",isAuthenticated,getProduct);
routerProduct.delete('/product/:id',isAuthenticated,deleteProduct)
module.exports=routerProduct ;