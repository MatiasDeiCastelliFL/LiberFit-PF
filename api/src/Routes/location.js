const { Router } = require("express")
const postLocacion = require("../controllers/locationControllers")

const routerLocacion= Router();

routerLocacion.post("/locacion",postLocacion);

module.exports = routerLocacion