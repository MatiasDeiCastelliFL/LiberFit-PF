const { Router } = require("express");
const { getClientsRequest, postClientsRequest, deleteClientRequest } = require("../controllers/clientControllers");
const routerClient= Router();

routerClient.get("/clients", getClientsRequest); //QUERY: name, email
routerClient.post("/client", postClientsRequest); //BODY: { name, phone, email, password, image }
routerClient.delete("/clients", deleteClientRequest);

module.exports = routerClient;