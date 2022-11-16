const { Router } = require("express")
const {postGym,getAll}= require("../controllers/gymControllers")
const routerGym= Router();
const {isAuthenticated}= require('../Helpers/auth')

routerGym.get("/gym",getAll);
routerGym.post("/gym",isAuthenticated,postGym);

module.exports =routerGym 
