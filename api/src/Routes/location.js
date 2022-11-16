const { Router } = require("express")
const {getLocacion,postLocacion,putLocacion,deleteLocacion,getLocacionById, getLocationReviewController }= require("../controllers/locationControllers")
const {isAuthenticated}= require('../Helpers/auth')
const routerLocacion= Router();

routerLocacion.post("/locacion",postLocacion);
routerLocacion.get("/locacion",getLocacion);
routerLocacion.get("/locacion/:id",getLocacionById);

routerLocacion.get('/review',getLocationReviewController);

routerLocacion.get("/locacion/",getLocacionById);
routerLocacion.put("/locacion/:id",isAuthenticated,putLocacion);
routerLocacion.delete("/locacion/:id",isAuthenticated,deleteLocacion);

module.exports = routerLocacion