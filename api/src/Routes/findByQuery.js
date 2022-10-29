import { Router } from 'express'
import getQuery from "../controllers/infogetQueryControllers"
const routerQueryExercise = Router()
routerQueryExercise.get('/execises', getQuery)
export default routerQueryExercise