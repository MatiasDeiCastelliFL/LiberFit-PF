const { Router } = require("express");
const { getClientsRequest, postClientsRequest, deleteClientRequest, putClientRequest, getClientsPayments,postReview,FiltrarClienteInactivoConSede,FiltrarClienteActivoConSede,CantActivo,CantInacativo,FiltrarClienteInactivo,FiltrarClienteActivo,activarCliente,inactivarCliente,FiltrarRutinaConcliente } = require("../controllers/clientControllers");
const auth = require("../Helpers/auth");
const routerClient= Router();
const {}= require('../Helpers/auth')
const { upload } = require('../config/multer.config');



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

module.exports = routerClient;