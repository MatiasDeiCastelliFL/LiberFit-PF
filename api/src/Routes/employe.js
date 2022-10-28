const { Router} = require("express");

const postEmpleado = require("../controllers/employeControllers");

const routerEmpleado = Router();

routerEmpleado.post("/empleado", postEmpleado);


module.exports = routerEmpleado;