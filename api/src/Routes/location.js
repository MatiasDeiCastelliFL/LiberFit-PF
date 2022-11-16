const { Router } = require("express")
const {getLocacion,postLocacion,putLocacion,deleteLocacion,getLocacionById }= require("../controllers/locationControllers")
const {isAuthenticated}= require('../Helpers/auth')
const routerLocacion= Router();

routerLocacion.post("/locacion",postLocacion);
routerLocacion.get("/locacion",getLocacion);
routerLocacion.get("/locacion/:id",getLocacionById);
routerLocacion.get("/locacion/",getLocacionById);
routerLocacion.put("/locacion/:id",isAuthenticated,putLocacion);
routerLocacion.delete("/locacion/:id",deleteLocacion);

module.exports = routerLocacion