import { Router } from 'express';
import * as newsController from './newsController';

const router = Router();

router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getNewsById);
router.post('/', newsController.createNews);
router.put('/:id', newsController.updateNews);

export default router;
