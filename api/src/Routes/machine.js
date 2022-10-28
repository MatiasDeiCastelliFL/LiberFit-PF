import { Router} from "express";

import postMachine from "../controllers/machineControllers";

const routerMachine= Router();

routerMachine.post("/mahine",postMachine);

export default routerMachine;