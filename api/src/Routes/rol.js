import { Router} from "express";

import postRol from "../controllers/rolControllers";

const routerRol= Router();

routerRol.post("/rol",postRol);

export default routerRol;