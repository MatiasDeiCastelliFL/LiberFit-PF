const { Router } = require("express");
const { getApi, getData,getlocacionesJson } = require("../controllers/generalControllers.js");

const routerGeneral = Router();
routerGeneral.get("/info", getApi);

routerGeneral.get("/filldb", getData);
routerGeneral.get("/infolocaciones", getlocacionesJson);

module.exports = routerGeneral;