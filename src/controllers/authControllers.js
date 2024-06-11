
import authService from '../services/authServices';

const register = async (req, res) => {
    try {
        const token = await authService.register(req.body);
        res.json({token});
    } catch (err) {
        res.status(400).json({error:err.message});
    }
}

const login = async (req, res) => {
    try {
        const token = await authService.login(req.body);
        res.json({token});
    } catch (err) {
        res.status(401).json({ error: err.message});
    }
};

export default {register, login};

