const { Router } = require("express")
const postOwner = require("../controllers/ownerControllers")

const routerOwner= Router();

routerOwner.post("/owner",postOwner);

module.exports = routerOwner