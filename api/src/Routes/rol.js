const {Router}= require('express')

const {postRol} = require("../controllers/rolControllers");

const routerRol= Router();

routerRol.post("/rol",postRol);

module.exports=routerRol ;