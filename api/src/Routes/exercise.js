const { Router } = require("express")
const {getExercises, postExercise,putExercise,deleteExercise}= require('../controllers/exerciseControllers');
const {isAuthenticated}= require('../Helpers/auth')
const routerExercise= Router();

routerExercise.get("/exercises",getExercises);
routerExercise.post("/exercises",isAuthenticated,postExercise);
routerExercise.put("/exercises",isAuthenticated,putExercise);
routerExercise.delete("/exercises",isAuthenticated,deleteExercise);

module.exports = routerExercise 