const { Router } = require("express")
const {getLocacion,postLocacion,putLocacion,deleteLocacion,getLocacionById }= require("../controllers/locationControllers")
const {isAuthenticated}= require('../Helpers/auth')
const routerLocacion= Router();

routerLocacion.post("/locacion",isAuthenticated,postLocacion);
routerLocacion.get("/locacion",getLocacion);
routerLocacion.get("/locacion/:id",isAuthenticated,getLocacionById);
routerLocacion.get("/locacion/",isAuthenticated,getLocacionById);
routerLocacion.put("/locacion/:id",isAuthenticated,putLocacion);
routerLocacion.delete("/locacion/:id",isAuthenticated,deleteLocacion);

module.exports = routerLocacion