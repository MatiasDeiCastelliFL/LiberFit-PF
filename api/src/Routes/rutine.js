const {Router}= require('express')

const {postRutine} =require("../controllers/rutineControllers");

const routerRutine= Router();

routerRutine.post("/rol",postRutine);

module.exports=routerRutine;