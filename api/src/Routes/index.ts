import {Router} from 'express';
import postData from '../controllers/post';
// import init from '../controllers';
import {getApi} from "../controllers/general"

const router = Router() 
router.get('/info', getApi )
router.post('/data', postData )

export default router 