// src/routes/authRoutes.js
import express from 'express';
import authControllers from '../controllers/authControllers';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

export default router;