const { Router} = require("express");
const { upload } = require("../config/multer.config");

const {postEmpleado,getEmpleado,modificarEmpleado,deleteEmployee,inactivarEmployee,activarEmployee} = require("../controllers/employeControllers");
const routerEmpleado = Router();

routerEmpleado.post("/empleado", upload ,postEmpleado);
routerEmpleado.get("/empleado",getEmpleado);
routerEmpleado.put("/empleado",modificarEmpleado);
routerEmpleado.delete("/empleado",deleteEmployee);
routerEmpleado.put("/empleadoDesactivar",inactivarEmployee);
routerEmpleado.put("/empleadoActivar",activarEmployee);
module.exports = routerEmpleado;