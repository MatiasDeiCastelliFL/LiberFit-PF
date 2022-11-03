const { Router} = require("express");
const { upload } = require("../config/multer.config");

const {isAuthenticated}= require('../Helpers/auth')
const {postEmpleado,getEmpleado,modificarEmpleado,deleteEmployee,inactivarEmployee,activarEmployee,FiltrarUsuarioActivo,FiltrarUsuarioInactivo} = require("../controllers/employeControllers");
const routerEmpleado = Router();

routerEmpleado.post("/empleado",isAuthenticated, upload ,postEmpleado);
routerEmpleado.get("/empleado",isAuthenticated,getEmpleado);
routerEmpleado.put("/empleado",isAuthenticated,modificarEmpleado);
routerEmpleado.delete("/empleado",isAuthenticated,deleteEmployee);
routerEmpleado.put("/empleadoDesactivar",isAuthenticated,inactivarEmployee);
routerEmpleado.put("/empleadoActivar",isAuthenticated,activarEmployee);
routerEmpleado.get("/FiltrarEmpleadoActivo",isAuthenticated,FiltrarUsuarioActivo)
routerEmpleado.get("/FiltrarEmpleadoInactivo",isAuthenticated,FiltrarUsuarioInactivo)

=========
const {postEmpleado,getEmpleado,modificarEmpleado,deleteEmployee,inactivarEmployee,activarEmployee,FiltrarUsuarioActivo,FiltrarUsuarioInactivo,CantActivo,CantInacativo,FiltrarUsuarioInactivoConSede,
    FiltrarUsuarioActivoConSede} = require("../controllers/employeControllers");
const routerEmpleado = Router();

routerEmpleado.post("/empleado", upload ,postEmpleado);
routerEmpleado.get("/empleado",getEmpleado);
routerEmpleado.put("/empleado",modificarEmpleado);
routerEmpleado.delete("/empleado",deleteEmployee);
routerEmpleado.put("/empleadoDesactivar",inactivarEmployee);
routerEmpleado.put("/empleadoActivar",activarEmployee);
routerEmpleado.get("/FiltrarEmpleadoActivo",FiltrarUsuarioActivo)
routerEmpleado.get("/FiltrarEmpleadoInactivo",FiltrarUsuarioInactivo)
routerEmpleado.get("/CantidadEmpleadoActivo",CantActivo)
routerEmpleado.get("/CantidadEmpleadoInactivo",CantInacativo)
routerEmpleado.get("/FiltrarUsuarioInactivoConSede",FiltrarUsuarioInactivoConSede)
routerEmpleado.get("/FiltrarUsuarioActivoConSede",FiltrarUsuarioActivoConSede)
>>>>>>>>> Temporary merge branch 2
module.exports = routerEmpleado;