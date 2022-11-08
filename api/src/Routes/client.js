const { Router } = require("express");
const { getClientsRequest, postClientsRequest, deleteClientRequest, putClientRequest, getClientsPayments } = require("../controllers/clientControllers");
const auth = require("../Helpers/auth");
const routerClient= Router();
const {isAuthenticated}= require('../Helpers/auth')
const { upload } = require('../config/multer.config');


routerClient.get("/clients", getClientsRequest);//QUERY: name, email
routerClient.get("/clients/payments", getClientsPayments); 
routerClient.post("/clients",postClientsRequest); //BODY: { name, phone, email, password, image }
routerClient.put("/clients",upload ,putClientRequest) //BODY: { id, name, phone, email, password, image }
routerClient.delete("/clients", isAuthenticated,deleteClientRequest); //BODY: { id, name, email }


module.exports = routerClient;