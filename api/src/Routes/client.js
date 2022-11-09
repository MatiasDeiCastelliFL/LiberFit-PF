const { Router } = require("express");
const { getClientsRequest, postClientsRequest, deleteClientRequest, putClientRequest, getClientsPayments } = require("../controllers/clientControllers");
const auth = require("../Helpers/auth");
const routerClient= Router();
const {isAuthenticated}= require('../Helpers/auth')
const { upload } = require('../config/multer.config');


<<<<<<< HEAD
routerClient.get("/clients",isAuthenticated ,getClientsRequest);//QUERY: name, email
routerClient.get("/clients/payments",isAuthenticated, getClientsPayments); 
routerClient.post("/clients",isAuthenticated,postClientsRequest); //BODY: { name, phone, email, password, image }
routerClient.put("/clients",upload ,isAuthenticated,putClientRequest) //BODY: { id, name, phone, email, password, image }
routerClient.delete("/clients", isAuthenticated,deleteClientRequest); //BODY: { id, name, email }
=======
routerClient.get("/clients" ,getClientsRequest);//QUERY: name, email
routerClient.get("/clients/payments",getClientsPayments); 
routerClient.post("/clients",postClientsRequest); //BODY: { name, phone, email, password, image }
routerClient.put("/clients",upload,putClientRequest) //BODY: { id, name, phone, email, password, image }
routerClient.delete("/clients",deleteClientRequest); //BODY: { id, name, email }
>>>>>>> 972927c6ae7dbc2584f2bc2ecec4be60a35feddf


module.exports = routerClient;