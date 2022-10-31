const { Router } = require("express")
const {postPayment, getPayment, modificarPayment} = require("../controllers/paymentControllers")

const routerPayment= Router();

routerPayment.post("/payment",postPayment);
routerPayment.get("/payment",getPayment);
routerPayment.put("/payment",modificarPayment);


module.exports = routerPayment
