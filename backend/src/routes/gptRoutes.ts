import { Router } from 'express';
import { getChatResponse } from '../controllers/gptController';

const router = Router();
router.post('/chat', getChatResponse);
export default router;