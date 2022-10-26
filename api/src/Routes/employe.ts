
import { Router} from "express";

import postEmpleado from "../controllers/employeControllers";

const routerEmpleado= Router();

routerEmpleado.post("/empleado",postEmpleado);

export default routerEmpleado;