const { Router } = require("express");
const { getClientsRequest, postClientsRequest, deleteClientRequest, putClientRequest } = require("../controllers/clientControllers");
const auth = require("../Helpers/auth");
const routerClient= Router();
const {isAuthenticated}= require('../Helpers/auth')

routerClient.get("/clients", getClientsRequest); //QUERY: name, email
routerClient.post("/clients",postClientsRequest); //BODY: { name, phone, email, password, image }
routerClient.put("/clients", isAuthenticated,putClientRequest) //BODY: { id, name, phone, email, password, image }
routerClient.delete("/clients", isAuthenticated,deleteClientRequest); //BODY: { id, name, email }


module.exports = routerClient;