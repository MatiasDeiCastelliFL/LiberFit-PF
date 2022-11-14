const { Router } = require("express");
const {isAuthenticated}= require('../Helpers/auth')
const {upload}= require('../config/multer.config')
const {
    postTraining,
    getTraining,
    putTraining,
    deleteTraining,
} = require("../controllers/trainingControllers");

const routerTraining = Router();

routerTraining.get("/training",isAuthenticated ,getTraining);
routerTraining.post("/training",isAuthenticated ,upload,postTraining);
routerTraining.put("/training/:id",upload,isAuthenticated, putTraining);
routerTraining.delete("/training/:id",isAuthenticated, deleteTraining);

module.exports = routerTraining;
