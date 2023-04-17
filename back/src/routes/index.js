const { Router } = require('express');
const favRouter = require('./favRouter');
const characterRouter = require('./characterRouter');

const login = require('../controllers/login');

const mainRouter = Router();

mainRouter.get('/login', login);

mainRouter.use('/character', characterRouter);
mainRouter.use('/fav', favRouter);

module.exports = mainRouter;