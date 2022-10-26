import * as E from 'express';
import { getApi } from '../controllers/general';

const router= E.Router();

router.get("/datosGym",getApi);