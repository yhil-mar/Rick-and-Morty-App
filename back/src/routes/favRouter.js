const { Router } = require('express');
const postFav = require('../controllers/postFav');

const favRouter = Router();

favRouter.post('/', async (req, res) => {
    const { name, origin, status, image, species, gender } = req.body;
    try {
        const favorites = await postFav(name, origin, status, image, species, gender);
        res.status(200).json(favorites);
    } catch (error) {
        res.status(error.status).json({ error: error.message });
    }
});
favRouter.delete('/:id');

module.exports = favRouter;