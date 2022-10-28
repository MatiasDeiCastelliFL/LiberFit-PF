const { Router } = require("express");

const {
    postTraining,
  getTraining,
    putTraining,
    deleteTraining,
} = require("../controllers/trainingControllers");

const routerTraining = Router();

routerTraining.get("/training", getTraining);
routerTraining.post("/training", postTraining);
routerTraining.put("/training/:id", putTraining);
routerTraining.delete("/training/:id", deleteTraining);

module.exports = routerTraining;
