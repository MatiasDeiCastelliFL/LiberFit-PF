const {Router}= require('express')
const {upload }= require('../config/multer.config')
const {getProduct,postProduct,deleteProduct,activarProduc,inactivarProduct,CantActivo,
    CantInacativo,
    FiltrarProductoDesactivado,
    FiltrarProductoActivo} = require("../controllers/productControllers");

const routerProduct= Router();

routerProduct.post("/product",postProduct);
routerProduct.get("/product",getProduct);
routerProduct.delete('/product/:id',deleteProduct)
routerProduct.put("/ProductoDesactivar",inactivarProduct);
routerProduct.put("/ProductoActivar",activarProduc);
routerProduct.get("/CantProductoInacativo",CantInacativo)
routerProduct.get("/CantProductoActivo",CantActivo)
routerProduct.get("/CantProductoActivo",FiltrarProductoDesactivado)
routerProduct.get("/CantProductoActivo",FiltrarProductoActivo)
module.exports=routerProduct ;