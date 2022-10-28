import { Router} from "express";

import postPayment from "../controllers/paymentControllers";

const routerPayment= Router();

routerPayment.post("/payment",postPayment);

export default routerPayment;