import express from 'express';
import { protect } from '../middlewares/protect.js';
import { createProject, getAllProjects, getProject, updateProject } from '../controllers/projectController.js';

const router = express.Router();

router.get('/', getAllProjects);
router.get('/:slug', getProject);
router.post('/create', protect, createProject);
router.put('/edit-project/:slug', protect, updateProject);


export default router;