const { Router } = require("express")
const postMachine = require("../controllers/machineControllers")

const routerMachine= Router();

routerMachine.post("/machine",postMachine);

module.exports = routerMachine