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
routerEmpleado.put("/ProductoDesactivar",inactivarProduct);
routerEmpleado.put("/ProductoActivar",activarProduc);
routerEmpleado.get("/CantProductoInacativo",CantInacativo)
routerEmpleado.get("/CantProductoActivo",CantActivo)
routerEmpleado.get("/CantProductoActivo",FiltrarProductoDesactivado)
routerEmpleado.get("/CantProductoActivo",FiltrarProductoActivo)
module.exports=routerProduct ;