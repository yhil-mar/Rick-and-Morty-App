const { postFav, deleteFav } = require('../controllers/handleFavorites');
const { Router } = require('express');

const favRouter = Router();

favRouter.post('/', postFav);
favRouter.delete('/:id', deleteFav);

module.exports = favRouter;