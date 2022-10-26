import {Router} from 'express';
import {getApi} from "../controllers/generalControllers"

const routerGeneral = Router() 
routerGeneral.get('/info', getApi )




export default routerGeneral 