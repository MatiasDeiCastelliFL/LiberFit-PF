const { Router } = require("express");
const {isAuthenticated}= require('../Helpers/auth')
const {
    postTraining,
  getTraining,
    putTraining,
    deleteTraining,
} = require("../controllers/trainingControllers");

const routerTraining = Router();

routerTraining.get("/training", getTraining);
routerTraining.post("/training", isAuthenticated,postTraining);
routerTraining.put("/training/:id",isAuthenticated, putTraining);
routerTraining.delete("/training/:id",isAuthenticated, deleteTraining);

module.exports = routerTraining;
