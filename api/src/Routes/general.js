const { Router } = require("express");
const { getApi, getData } = require("../controllers/generalControllers.js");

const routerGeneral = Router();
routerGeneral.get("/info", getApi);
routerGeneral.get("/filldb", getData);
module.exports = routerGeneral;