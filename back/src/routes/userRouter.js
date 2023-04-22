const postUser = require('../controllers/postUser');
const login = require('../controllers/login');

const { Router } = require('express');

const userRouter = Router();

userRouter.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        const credenciales = await postUser(email, password);
        res.status(200).json({ credenciales });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

userRouter.get('/', async (req, res) => {
    const { email, password } = req.query;
    try {
        const access = await login(email, password);
        res.status(200).json(access);
    } catch (error) {
        res.status(error.status).json({ error: error.message });
    }
});

module.exports = userRouter;
