import {Router} from 'express'
import getIdcedes  from "../controllers/infogetIdControllers"
const routerIdcedes =Router()
routerIdcedes.get('/info/cedes/:id', getIdcedes )



export default routerIdcedes
