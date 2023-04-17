const getCharByID = require('../controllers/getCharById');
const { Router } = require('express');

const characterRouter = Router();

characterRouter.get('/:id', getCharByID);

module.exports = characterRouter;
