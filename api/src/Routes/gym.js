const { Router } = require("express")
const postGym= require("../controllers/gymControllers")
const routerGym= Router();

routerGym.post("/gym",postGym);

module.exports =routerGym 
