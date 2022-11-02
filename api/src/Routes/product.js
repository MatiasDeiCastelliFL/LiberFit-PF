const {Router}= require('express')
const {upload }= require('../config/multer.config')

const {getProduct,postProduct,deleteProduct,activarProduc,inactivarProduct,CantActivo,
    CantInacativo,
    FiltrarProductoDesactivado,
    FiltrarProductoActivo} = require("../controllers/productControllers");

const routerProduct= Router();

const {getProduct,postProduct,deleteProduct} = require("../controllers/productControllers");
const {isAuthenticated}= require('../Helpers/auth')
routerProduct.post("/product",isAuthenticated,postProduct);
routerProduct.get("/product",isAuthenticated,getProduct);
routerProduct.delete('/product/:id',isAuthenticated,deleteProduct)
routerProduct.put("/ProductoDesactivar",inactivarProduct);
routerProduct.put("/ProductoActivar",activarProduc);
routerProduct.get("/CantProductoInacativo",CantInacativo)
routerProduct.get("/CantProductoActivo",CantActivo)
routerProduct.get("/CantProductoActivo",FiltrarProductoDesactivado)
routerProduct.get("/CantProductoActivo",FiltrarProductoActivo)



module.exports=routerProduct ;