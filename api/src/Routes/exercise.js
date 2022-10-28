import { Router} from "express";

import postExercise from "../controllers/exerciseControllers";

const routerExercise= Router();

routerExercise.post("/exercise",postExercise);

export default routerExercise;