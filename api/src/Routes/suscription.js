const {Router}= require('express')
const {isAuthenticated}= require('../Helpers/auth')
const {postSuscription, getAllSuscription}= require("../controllers/suscriptionControllers") ;

const routerSuscription= Router();

routerSuscription.post("/suscription",isAuthenticated,postSuscription);
routerSuscription.get("/suscription",isAuthenticated,getAllSuscription);

module.exports=routerSuscription ;