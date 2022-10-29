const {Router}= require('express')

const {postRutine} =require("../controllers/rutineControllers");

const routerRutine= Router();

routerRutine.post("/rutine",postRutine);

module.exports=routerRutine;