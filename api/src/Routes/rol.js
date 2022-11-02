const {Router}= require('express')

const {postRol,getRol,putRol,deleteRol} = require("../controllers/rolControllers");

const routerRol= Router();

routerRol.post("/rol",postRol);
routerRol.get("/rol",getRol);
routerRol.put("/rol/:id",putRol);
routerRol.delete("/rol/:id",deleteRol);

module.exports=routerRol ;