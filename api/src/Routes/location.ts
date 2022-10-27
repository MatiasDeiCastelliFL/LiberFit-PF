
import { Router} from "express";

import postLocation from "../controllers/locationControllers";

const routerLocacion = Router();

routerLocacion.post("/locacion", postLocation)

export default routerLocacion;