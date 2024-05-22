import { Router } from 'express';
import { getUserInfo } from './userController';
import { authenticate } from '../authorization/authMiddleware';

const router = Router();

router.get('/me', authenticate, getUserInfo);

export default router;
