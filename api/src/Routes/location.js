const { Router } = require("express")
const {getLocacion,postLocacion,putLocacion,deleteLocacion }= require("../controllers/locationControllers")

const routerLocacion= Router();

routerLocacion.post("/locacion",postLocacion);
routerLocacion.get("/locacion",getLocacion);
routerLocacion.put("/locacion/:id",putLocacion);
routerLocacion.delete("/locacion/:id",deleteLocacion);

module.exports = routerLocacion