const { Router } = require("express");
const { getClientsRequest, postClientsRequest, deleteClientRequest, putClientRequest } = require("../controllers/clientControllers");
const routerClient= Router();


routerClient.get("/clients", getClientsRequest); //QUERY: name, email
routerClient.post("/clients", postClientsRequest); //BODY: { name, phone, email, password, image }
routerClient.put("/clients", putClientRequest) //BODY: { id, name, phone, email, password, image }
routerClient.delete("/clients", deleteClientRequest); //BODY: { id, name, email }


module.exports = routerClient;