//src/routes/userRutes.js

import express from 'express'; 
import authenticateToken from '../middlewares/authenticateToken.js';
import userService from '../services/userService.js';

const router = express.Router();

router.get('/user', authenticateToken, async (req,res) => {
    try {
        const user = await userService.getUserById(req,user.id);
        res.json({email:user.email});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

export default router; 
