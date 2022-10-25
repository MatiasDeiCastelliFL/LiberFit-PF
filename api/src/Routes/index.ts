import {Router} from 'express';
import postData from '../controllers/post';
import init from '../controllers';

const router = Router() 
router.get('/', init )
router.post('/data', postData )

export default router