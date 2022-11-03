const { Router } = require("express")
const {postPayment, getPayment, modificarPayment} = require("../controllers/paymentControllers")
const {isAuthenticated}= require('../Helpers/auth')
const routerPayment= Router();

routerPayment.post("/payment",isAuthenticated,postPayment);
routerPayment.get("/payment",isAuthenticated,getPayment);
routerPayment.put("/payment",isAuthenticated,modificarPayment);


module.exports = routerPayment
