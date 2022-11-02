const { Router } = require("express")
const {getExercises, postExercise,putExercise,deleteExercise}= require('../controllers/exerciseControllers');

const routerExercise= Router();

routerExercise.get("/exercises",getExercises);
routerExercise.post("/exercises",postExercise);
routerExercise.put("/exercises",putExercise);
routerExercise.delete("/exercises",deleteExercise);

module.exports = routerExercise 