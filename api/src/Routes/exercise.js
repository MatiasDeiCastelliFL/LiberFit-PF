const { Router } = require("express")
const {getExercises, postExercise,putExercise,deleteExercise,FiltrarExecirseActivo,FiltrarExecirseInactivo,CantInacativo,CantActivo,inactivarExecirse,activarExecirse}= require('../controllers/exerciseControllers');
const {isAuthenticated}= require('../Helpers/auth')
const routerExercise= Router();
activarExercise,inactivarExercise
routerExercise.get("/exercises",getExercises);
routerExercise.post("/exercises",isAuthenticated,postExercise);
routerExercise.put("/exercises",isAuthenticated,putExercise);
routerEmpleado.put("/exercisesDesactivar",isAuthenticated,inactivarExecirse);
routerEmpleado.put("/exercisesActivar",isAuthenticated,activarExecirse);
routerExercise.delete("/exercises",isAuthenticated,deleteExercise);
routerEmpleado.get("/FiltrarExercisesActivo",isAuthenticated,FiltrarExecirseActivo)
routerEmpleado.get("/FiltrarExercisesInactivo",isAuthenticated,FiltrarExecirseInactivo)
routerEmpleado.get("/CantExercisesInacativo",isAuthenticated,CantInacativo)
routerEmpleado.get("/CantExercisesActivo",isAuthenticated,CantActivo)


module.exports = routerExercise 