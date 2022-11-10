const { Router } = require("express")
const {getExercises, postExercise,putExercise,deleteExercise,FiltrarExecirseActivo,FiltrarExecirseInactivo,CantInacativo,CantActivo,inactivarExecirse,activarExecirse}= require('../controllers/exerciseControllers');
const {isAuthenticated}= require('../Helpers/auth')
const routerExercise= Router();
routerExercise.get("/exercises",getExercises);
routerExercise.post("/exercises",isAuthenticated,postExercise);
routerExercise.put("/exercises",isAuthenticated,putExercise);
routerExercise.put("/exercisesDesactivar",isAuthenticated,inactivarExecirse);
routerExercise.put("/exercisesActivar",isAuthenticated,activarExecirse);
routerExercise.delete("/exercises",isAuthenticated,deleteExercise);
routerExercise.get("/FiltrarExercisesActivo",isAuthenticated,FiltrarExecirseActivo)
routerExercise.get("/FiltrarExercisesInactivo",isAuthenticated,FiltrarExecirseInactivo)
routerExercise.get("/CantExercisesInacativo",isAuthenticated,CantInacativo)
routerExercise.get("/CantExercisesActivo",isAuthenticated,CantActivo)


module.exports = routerExercise 