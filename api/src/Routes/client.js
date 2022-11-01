const { Router } = require("express");
const { getClientsRequest, postClientsRequest, deleteClientRequest, putClientRequest } = require("../controllers/clientControllers");
const routerClient= Router();


routerClient.get("/clients", getClientsRequest); //QUERY: name, email
routerClient.post("/client", postClientsRequest); //BODY: { name, phone, email, password, image }
routerClient.put("/client", putClientRequest) //BODY: { id, name, phone, email, password, image }
routerClient.delete("/client", deleteClientRequest); //BODY: { id, name, email }


module.exports = routerClient;