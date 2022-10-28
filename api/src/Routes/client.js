const { Router } = require("express");
const { getClients, postClients } = require("../controllers/clientControllers");

const routerClient= Router();

routerClient.get("/client", getClients);
routerClient.post("/client", postClients);

module.exports = routerClient;