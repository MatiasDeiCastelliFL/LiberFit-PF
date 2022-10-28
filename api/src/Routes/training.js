const { Router } = require("express");

const {
    postTraining,
  getTrainings,
  getTraining,
    putTraining,
    deleteTraining,
} = require("../controllers/trainingControllers");

const routerTraining = Router();

routerTraining.get("/trainings", getTrainings);
routerTraining.get("/training/:id", getTraining);
routerTraining.post("/training", postTraining);
routerTraining.put("/training/:id", putTraining);
routerTraining.delete("/training/:id", deleteTraining);

module.exports = routerTraining;
