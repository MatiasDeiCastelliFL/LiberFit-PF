import { Router} from "express";

import postLocacion from "../controllers/locationControllers";

const routerLocacion= Router();

routerLocacion.post("/locacion",postLocacion);

export default routerLocacion;