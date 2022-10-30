const {Router}= require('express')

const {postRutine,getRutine} =require("../controllers/rutineControllers");

const routerRutine= Router();

routerRutine.get("/rutine",getRutine);
routerRutine.post("/rutine",postRutine);

module.exports=routerRutine;