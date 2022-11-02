import {Router} from 'express'
import getIdemployee from "../controllers/infoempleadosid"
const routerIdEmployee=Router()
routerIdEmployee.get('/info/employee/:id', getIdemployee )

export default routerIdEmployee

