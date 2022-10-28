const { Router} = require("express");

const {postEmpleado,getEmpleado} = require("../controllers/employeControllers");
const routerEmpleado = Router();

routerEmpleado.post("/empleado", postEmpleado);
routerEmpleado.get("/empleado",getEmpleado);

module.exports = routerEmpleado;