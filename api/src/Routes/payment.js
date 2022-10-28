const { Router } = require("express")
const postPayment = require("../controllers/paymentControllers")

const routerPayment= Router();

routerPayment.post("/payment",postPayment);

module.exports = routerPayment