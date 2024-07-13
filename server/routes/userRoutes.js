import express from 'express';
import { checkUser, login, logout } from '../controllers/userController.js';

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.get('/check-user', checkUser);

export default router;