const { Router} = require("express");

const postClient = require("../controllers/clientControllers");

const routerClient= Router();

routerClient.post("/client",postClient);

module.exports = routerClient;