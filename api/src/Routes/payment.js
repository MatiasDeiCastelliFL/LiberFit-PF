const { Router } = require("express");
const {
    postPayment,
    getPayment,
    modificarPayment,
    getCreateOrder,
    getCaptureOrder,
    getCancelOrder,
} = require("../controllers/paymentControllers");
const { isAuthenticated } = require("../Helpers/auth");
const routerPayment = Router();

routerPayment.post("/payment", isAuthenticated, postPayment);
routerPayment.get("/payment", isAuthenticated, getPayment);
routerPayment.put("/payment", isAuthenticated, modificarPayment);

//Rutas para la pasarela de pago con Paypal
routerPayment.get("/create-order", getCreateOrder);
routerPayment.get("/capture-order", getCaptureOrder);
routerPayment.get("/cancel-order", getCancelOrder);

module.exports = routerPayment;
