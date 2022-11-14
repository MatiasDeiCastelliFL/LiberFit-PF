const { Router } = require("express");
const { getClientsRequest, postClientsRequest, deleteClientRequest, putClientRequest, getClientsPayments,postReview,FiltrarClienteInactivoConSede,FiltrarClienteActivoConSede,CantActivo,CantInacativo,FiltrarClienteInactivo,FiltrarClienteActivo,activarCliente,inactivarCliente,FiltrarRutinaConcliente } = require("../controllers/clientControllers");
const auth = require("../Helpers/auth");
const routerClient= Router();
const {}= require('../Helpers/auth')
const { upload } = require('../config/multer.config');



<<<<<<< HEAD
routerClient.get("/clients", getClientsRequest);
routerClient.get("/clients/payments",getClientsPayments); 
routerClient.post("/clients",postClientsRequest);
routerClient.put("/clients",upload ,putClientRequest) 
routerClient.delete("/clients",deleteClientRequest);
routerClient.put("/anuncioActivar",activarCliente);
routerClient.get("/FiltrarclientsActivo",FiltrarClienteActivo)
routerClient.get("/FiltrarclientsInactivo",FiltrarClienteInactivo)
routerClient.get("/CantclientsInacativo",CantInacativo)
routerClient.get("/CantclientsActivo",CantActivo)
routerClient.get("/FiltrarClienteInactivoConSede",FiltrarClienteInactivoConSede)
routerClient.get("/FiltrarClienteActivoConSede",FiltrarClienteActivoConSede)
routerClient.get("/FiltrarRutinaConcliente",FiltrarRutinaConcliente)
=======
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
>>>>>>> 5b7929002725ba8dbaf6471fba98bcb090cbea74

module.exports = routerClient;