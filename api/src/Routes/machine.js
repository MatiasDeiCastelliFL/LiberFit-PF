const { Router } = require("express")
const postMachine = require("../controllers/machineControllers")

const routerMachine= Router();

routerMachine.post("/mahine",postMachine);

module.exports = routerMachine