const {Router}= require('express')
const {upload }= require('../config/multer.config')
const {isAuthenticated}= require('../Helpers/auth')
const {getProduct,postProduct,deleteProduct,activarProduc,inactivarProduct,CantActivo,
    CantInacativo,
    FiltrarProductoDesactivado,
    FiltrarProductoActivo,
    FiltrarProductoInactivoConSede,
    FiltrarProductoActivoConSede} = require("../controllers/productControllers");

const routerProduct= Router();

routerProduct.get("/product",getProduct);
routerProduct.post("/product",isAuthenticated,postProduct);
routerProduct.delete('/product/:id',isAuthenticated,deleteProduct)
routerProduct.put("/ProductoDesactivar",isAuthenticated,inactivarProduct);
routerProduct.put("/ProductoActivar",isAuthenticated ,activarProduc);
routerProduct.get("/CantProductoInacativo", isAuthenticated,CantInacativo)
routerProduct.get("/CantProductoActivo",isAuthenticated ,CantActivo)
routerProduct.get("/ProductoDescativado",isAuthenticated ,FiltrarProductoDesactivado)
routerProduct.get("/ProductoActivado",isAuthenticated ,FiltrarProductoActivo)
routerProduct.get("/FiltrarProductoInactivoConSede",isAuthenticated ,FiltrarProductoInactivoConSede)
routerProduct.get("/FiltrarProductoActivoConSede",isAuthenticated ,FiltrarProductoActivoConSede)


module.exports=routerProduct ;