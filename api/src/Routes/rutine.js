import { Router} from "express";

import postRutine from "../controllers/rutineControllers";

const routerRutine= Router();

routerRutine.post("/rol",postRutine);

export default routerRutine;