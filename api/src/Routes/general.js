import {Router} from 'express';
import {getApi} from "../controllers/generalControllers.js"



const routerGeneral = Router() 
routerGeneral.get('/info', getApi )
export default routerGeneral 