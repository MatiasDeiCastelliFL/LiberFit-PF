const { Router } = require("express");
const { upload } = require("../config/multer.config");
const {postMachine,getMachine,putMachine,deleteMachine} = require("../controllers/machineControllers")
const {isAuthenticated}= require('../Helpers/auth')


const routerMachine= Router();

routerMachine.post("/machine",upload,isAuthenticated,postMachine);
routerMachine.get("/machine",getMachine);
routerMachine.put("/machine/:id",upload,isAuthenticated,putMachine);
routerMachine.delete("/machine/:id",isAuthenticated,deleteMachine);

module.exports = routerMachine