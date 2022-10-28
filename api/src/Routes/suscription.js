import { Router} from "express";

import postSuscription from "../controllers/suscriptionControllers";

const routerSuscription= Router();

routerSuscription.post("/suscription",postSuscription);

export default routerSuscription;