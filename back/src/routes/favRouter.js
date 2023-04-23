const { Router } = require('express');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');

const favRouter = Router();

favRouter.post('/', async (req, res) => {
    const { id, name, origin, status, image, species, gender } = req.body;
    console.log(origin);
    try {
        const favorites = await postFav(id, name, origin, status, image, species, gender);
        res.status(200).json(favorites);
    } catch (error) {
        res.status(error.status).json({ error: error.message });
    }
});
favRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const favorites = await deleteFav(id);
        res.status(200).json(favorites);
    } catch (error) {
        res.status(error.status).json({ error: error.message });
    };
});

module.exports = favRouter;