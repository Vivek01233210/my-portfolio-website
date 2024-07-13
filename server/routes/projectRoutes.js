import express from 'express';
import { protect } from '../middlewares/protect.js';
import { createProject } from '../controllers/projectController.js';

const router = express.Router();

router.post('/create', protect, createProject);

export default router;