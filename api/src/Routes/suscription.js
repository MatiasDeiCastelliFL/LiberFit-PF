const {Router}= require('express')

const {postSuscription}= require("../controllers/suscriptionControllers") ;

const routerSuscription= Router();

routerSuscription.post("/suscription",postSuscription);

module.exports=routerSuscription ;