const { Router } = require("express");
const {
    postPayment,
    getPayment,
    modificarPayment,
    postCreateOrder,
    getCaptureOrder,
    getCancelOrder,
    getIdClientePaymentss
} = require("../controllers/paymentControllers");
const { isAuthenticated } = require("../Helpers/auth");
const routerPayment = Router();

routerPayment.post("/payment",postPayment);
routerPayment.get("/payment",isAuthenticated,getPayment);
routerPayment.put("/payment", isAuthenticated, modificarPayment);
// routerPayment.get("/payment/Cuota",isAuthenticated,pagosActivo)

//Rutas para la pasarela de pago con Paypal
routerPayment.get("/create-order", postCreateOrder);
routerPayment.get("/capture-order", getCaptureOrder);
routerPayment.get("/cancel-order", getCancelOrder);

module.exports = routerPayment;
