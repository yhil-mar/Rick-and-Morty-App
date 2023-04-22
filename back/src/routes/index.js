const { Router } = require('express');
const favRouter = require('./favRouter');
const userRouter = require('./userRouter');
const characterRouter = require('./characterRouter');

const mainRouter = Router();

mainRouter.use('/login', userRouter);
mainRouter.use('/character', characterRouter);
mainRouter.use('/fav', favRouter);

module.exports = mainRouter;