const { Router} = require("express");
const { upload } = require("../config/multer.config");

const {isAuthenticated}= require('../Helpers/auth')
const {postEmpleado,getEmpleado,modificarEmpleado,deleteEmployee,inactivarEmployee,activarEmployee,FiltrarUsuarioActivo,FiltrarUsuarioInactivo,CantInacativo,CantActivo,FiltrarUsuarioActivoConSede,FiltrarUsuarioInactivoConSede,FiltrarRutinaConUsuario} = require("../controllers/employeControllers");
const routerEmpleado = Router();

routerEmpleado.post("/empleado",isAuthenticated ,upload ,postEmpleado);
// routerEmpleado.get("/empleado",isAuthenticated,getEmpleado);
routerEmpleado.get("/empleado",isAuthenticated,getEmpleado);
routerEmpleado.put("/empleado",isAuthenticated,modificarEmpleado);
routerEmpleado.delete("/empleado",isAuthenticated,deleteEmployee);
routerEmpleado.put("/empleadoDesactivar",isAuthenticated,inactivarEmployee);
routerEmpleado.put("/empleadoActivar",isAuthenticated,activarEmployee);
routerEmpleado.get("/FiltrarEmpleadoActivo",isAuthenticated,FiltrarUsuarioActivo)
routerEmpleado.get("/FiltrarEmpleadoInactivo",isAuthenticated,FiltrarUsuarioInactivo)
routerEmpleado.get("/CantEmpleadoInacativo",isAuthenticated,CantInacativo)
routerEmpleado.get("/CantEmpleadoActivo",isAuthenticated,CantActivo)
routerEmpleado.get("/FiltrarUsuarioInactivoConSede",isAuthenticated,FiltrarUsuarioInactivoConSede)
routerEmpleado.get("/FiltrarUsuarioActivoConSede",isAuthenticated,FiltrarUsuarioActivoConSede)
routerEmpleado.get("/FiltrarRutinaConUsuario",isAuthenticated,FiltrarRutinaConUsuario)
module.exports = routerEmpleado;