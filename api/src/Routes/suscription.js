const {Router}= require('express')

const {postSuscription, getAllSuscription}= require("../controllers/suscriptionControllers") ;

const routerSuscription= Router();

routerSuscription.post("/suscription",postSuscription);
routerSuscription.get("/suscription",getAllSuscription);

module.exports=routerSuscription ;