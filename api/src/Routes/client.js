const { Router } = require("express");
const { getClientsRequest, postClientsRequest, deleteClientRequest } = require("../controllers/clientControllers");

const routerClient= Router();

routerClient.get("/client", getClientsRequest);
routerClient.post("/client", postClientsRequest);
routerClient.delete("/client", deleteClientRequest);

module.exports = routerClient;