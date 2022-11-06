const { Router } = require("express");
const {
    postPayment,
    getPayment,
    modificarPayment,
    postCreateOrder,
    getCaptureOrder,
    getCancelOrder,
} = require("../controllers/paymentControllers");
const { isAuthenticated } = require("../Helpers/auth");
const routerPayment = Router();

routerPayment.post("/payment", postPayment);
routerPayment.get("/payment", isAuthenticated, getPayment);
routerPayment.put("/payment", isAuthenticated, modificarPayment);

//Rutas para la pasarela de pago con Paypal
routerPayment.post("/create-order", postCreateOrder);
routerPayment.get("/capture-order", getCaptureOrder);
routerPayment.get("/cancel-order", getCancelOrder);

module.exports = routerPayment;
