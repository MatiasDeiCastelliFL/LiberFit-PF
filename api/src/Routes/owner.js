import { Router} from "express";

import postOwner from "../controllers/ownerControllers";

const routerOwner= Router();

routerOwner.post("/owner",postOwner);

export default routerOwner;