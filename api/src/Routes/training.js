import { Router} from "express";

import postTraining from "../controllers/trainingControllers";

const routerTraining= Router();

routerSuscription.post("/training",postTraining);

export default routerTraining;