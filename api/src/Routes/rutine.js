const {Router}= require('express')

const {postRutine,getRutine,putRutine,deleteRutine} =require("../controllers/rutineControllers");

const routerRutine= Router();

routerRutine.get("/rutine",getRutine);
routerRutine.post("/rutine",postRutine);
routerRutine.put("/rutine/:id",putRutine);
routerRutine.delete("/rutine/:id",deleteRutine);

module.exports=routerRutine;