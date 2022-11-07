const {Router}= require('express')
const {isAuthenticated}= require('../Helpers/auth')
const {postRol,getRol,putRol,deleteRol} = require("../controllers/rolControllers");

const routerRol= Router();

routerRol.post("/rol",isAuthenticated,postRol);
routerRol.get("/rol",isAuthenticated,getRol);
routerRol.put("/rol/:id",isAuthenticated,putRol);
routerRol.delete("/rol/:id",isAuthenticated,deleteRol);

module.exports=routerRol ;