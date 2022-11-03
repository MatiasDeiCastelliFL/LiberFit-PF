const {Router}= require('express')
const {upload }= require('../config/multer.config')
const {isAuthenticated}= require('../Helpers/auth')
const {getProduct,postProduct,deleteProduct,activarProduc,inactivarProduct,CantActivo,
    CantInacativo,
    FiltrarProductoDesactivado,
    FiltrarProductoActivo} = require("../controllers/productControllers");

const routerProduct= Router();

routerProduct.post("/product",isAuthenticated,postProduct);
routerProduct.get("/product",getProduct);
routerProduct.delete('/product/:id',isAuthenticated,deleteProduct)
routerProduct.put("/ProductoDesactivar",inactivarProduct);
routerProduct.put("/ProductoActivar",activarProduc);
routerProduct.get("/CantProductoInacativo",CantInacativo)
routerProduct.get("/CantProductoActivo",CantActivo)
routerProduct.get("/ProductoActivado",FiltrarProductoDesactivado)
routerProduct.get("/ProductoDescativado",FiltrarProductoActivo)



module.exports=routerProduct ;