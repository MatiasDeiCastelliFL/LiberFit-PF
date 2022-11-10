const { Router } = require("express");
const { getClientsRequest, postClientsRequest, deleteClientRequest, putClientRequest, getClientsPayments,postReview } = require("../controllers/clientControllers");
const auth = require("../Helpers/auth");
const routerClient= Router();
const {isAuthenticated}= require('../Helpers/auth')
const { upload } = require('../config/multer.config');


routerClient.get("/clients" ,getClientsRequest);//QUERY: name, email
routerClient.get("/clients/payments",getClientsPayments); 
routerClient.post("/clients",postClientsRequest); //BODY: { name, phone, email, password, image }
routerClient.post("/clients/review",postReview); //BODY: { name, phone, email, password, image }
routerClient.put("/clients",upload,putClientRequest) //BODY: { id, name, phone, email, password, image }
routerClient.delete("/clients",deleteClientRequest); //BODY: { id, name, email }


module.exports = routerClient;