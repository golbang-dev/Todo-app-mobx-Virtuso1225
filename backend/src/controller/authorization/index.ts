import { Router } from 'express';
import * as auth from './authControll';

const router = Router();

router.post('/login', auth.login);
router.post('register', auth.register);

export default router;
