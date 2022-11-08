const { Router } = require("express")
const postOwner = require("../controllers/ownerControllers")
const {isAuthenticated}= require('../Helpers/auth')
const routerOwner= Router();

routerOwner.post("/owner",postOwner);

module.exports = routerOwner