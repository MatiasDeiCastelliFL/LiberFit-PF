const { Router } = require("express")
const postGym= require("../controllers/gymController")
const routerGym= Router();

routerGym.post("/gym",postGym);

module.exports =routerGym 
