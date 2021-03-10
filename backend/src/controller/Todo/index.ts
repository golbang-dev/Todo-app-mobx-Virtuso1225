import { Router } from 'express';
import * as Todo from './itemControll';

const router = Router();

router.get('/getlist', Todo.getTodoList);
router.post('/write', Todo.writePost);
router.post('/fix', Todo.fixPost);
router.post('/check', Todo.toggleItem);

export default router;
