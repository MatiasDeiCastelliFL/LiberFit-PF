import { Router} from "express";

import postGym from "../controllers/gymController";

const routerGym= Router();

routerGym.post("/gym",routerGym);

export default routerGym;