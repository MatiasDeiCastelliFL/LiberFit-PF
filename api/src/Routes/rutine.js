const {Router}= require('express')
const {isAuthenticated}= require('../Helpers/auth')
const {postRutine,getRutine,putRutine,deleteRutine} =require("../controllers/rutineControllers");

const routerRutine= Router();

routerRutine.get("/rutine",isAuthenticated,getRutine);
routerRutine.post("/rutine",isAuthenticated,postRutine);
routerRutine.put("/rutine/:id",isAuthenticated,putRutine);
routerRutine.delete("/rutine/:id",isAuthenticated,deleteRutine);

module.exports=routerRutine;