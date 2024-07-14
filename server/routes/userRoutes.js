import express from 'express';
import { checkUser, login, logout, message } from '../controllers/userController.js';

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.get('/check-user', checkUser);
router.post('/message', message);

export default router;