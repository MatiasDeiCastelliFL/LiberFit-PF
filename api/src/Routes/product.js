import { Router} from "express";

import postProduct from "../controllers/productControllers";

const routerProduct= Router();

routerProduct.post("/product",postProduct);

export default routerProduct;