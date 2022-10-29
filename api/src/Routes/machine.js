const { Router } = require("express")
const {postMachine,getMachine,putMachine,deleteMachine} = require("../controllers/machineControllers")


const routerMachine= Router();

routerMachine.post("/machine",postMachine);
routerMachine.get("/machine",getMachine);
routerMachine.put("/machine/:id",putMachine);
routerMachine.delete("/machine/:id",deleteMachine);

module.exports = routerMachine