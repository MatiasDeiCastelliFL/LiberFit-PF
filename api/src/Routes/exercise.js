const { Router } = require("express")
const {getExercises, postExercise}= require('../controllers/exerciseControllers')
const routerExercise= Router();

routerExercise.get("/exercises",getExercises);
routerExercise.post("/exercises",postExercise);

module.exports = routerExercise 