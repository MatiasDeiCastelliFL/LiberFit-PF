const { Router } = require("express");
const { getClientsRequest, postClientsRequest, deleteClientRequest, putClientRequest, getClientsPayments,postReview,FiltrarClienteInactivoConSede,FiltrarClienteActivoConSede,CantActivo,CantInacativo,FiltrarClienteInactivo,FiltrarClienteActivo,activarCliente,inactivarCliente,FiltrarRutinaConcliente } = require("../controllers/clientControllers");
const auth = require("../Helpers/auth");
const routerClient= Router();
const {isAuthenticated}= require('../Helpers/auth')
const { upload } = require('../config/multer.config');



routerClient.get("/clients",getClientsRequest);
routerClient.get("/clients/payments",isAuthenticated, getClientsPayments); 
routerClient.post("/clients",postClientsRequest);
routerClient.post("/clients/review",isAuthenticated,postReview); 
routerClient.put("/clients", upload, isAuthenticated, putClientRequest) 
routerClient.delete("/clients/:id", deleteClientRequest);
routerClient.put("/anuncioActivar",isAuthenticated,activarCliente);
routerClient.get("/FiltrarclientsActivo",isAuthenticated,FiltrarClienteActivo)
routerClient.get("/FiltrarclientsInactivo",isAuthenticated,FiltrarClienteInactivo)
routerClient.get("/CantclientsInacativo",isAuthenticated,CantInacativo)
routerClient.get("/CantclientsActivo",isAuthenticated,CantActivo)
routerClient.get("/FiltrarClienteInactivoConSede",isAuthenticated,FiltrarClienteInactivoConSede)
routerClient.get("/FiltrarClienteActivoConSede",isAuthenticated,FiltrarClienteActivoConSede)
routerClient.get("/FiltrarRutinaConcliente",isAuthenticated,FiltrarRutinaConcliente)

module.exports = routerClient;