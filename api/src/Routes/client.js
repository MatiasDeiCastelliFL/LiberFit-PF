const { Router } = require("express");
const { getClientsRequest, postClientsRequest, deleteClientRequest, putClientRequest, getClientsPayments,FiltrarClienteInactivoConSede,FiltrarClienteActivoConSede,CantActivo,CantInacativo,FiltrarClienteInactivo,FiltrarClienteActivo,activarCliente,inactivarCliente,FiltrarRutinaConcliente } = require("../controllers/clientControllers");
const auth = require("../Helpers/auth");
const routerClient= Router();
const {isAuthenticated}= require('../Helpers/auth')
const { upload } = require('../config/multer.config');



routerClient.get("/clients",isAuthenticated ,getClientsRequest);
routerClient.get("/clients/payments",isAuthenticated, getClientsPayments); 
routerClient.post("/clients",isAuthenticated,postClientsRequest);
routerClient.put("/clients",upload ,isAuthenticated,putClientRequest) 
routerClient.delete("/clients", isAuthenticated,deleteClientRequest);
routerEmpleado.put("/clientsDesactivar",isAuthenticated,inactivarCliente);
routerEmpleado.put("/anuncioActivar",isAuthenticated,activarCliente);
routerEmpleado.get("/FiltrarclientsActivo",isAuthenticated,FiltrarClienteActivo)
routerEmpleado.get("/FiltrarclientsInactivo",isAuthenticated,FiltrarClienteInactivo)
routerEmpleado.get("/CantclientsInacativo",isAuthenticated,CantInacativo)
routerEmpleado.get("/CantclientsActivo",isAuthenticated,CantActivo)
routerEmpleado.get("/FiltrarClienteInactivoConSede",isAuthenticated,FiltrarClienteInactivoConSede)
routerEmpleado.get("/FiltrarClienteActivoConSede",isAuthenticated,FiltrarClienteActivoConSede)
routerEmpleado.get("/FiltrarRutinaConcliente",isAuthenticated,FiltrarRutinaConcliente)

module.exports = routerClient;