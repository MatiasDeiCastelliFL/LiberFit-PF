const { Router } = require("express")
const postExercise= require('../controllers/exerciseControllers')
const routerExercise= Router();

routerExercise.post("/exercise",postExercise);

module.exports = routerExercise 