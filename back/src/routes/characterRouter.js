const getCharById = require('../controllers/getCharById');
const { Router } = require('express');

const router = Router();

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const NewCharacter = await getCharById(id);
        res.status(200).json(NewCharacter);
    } catch (error) {
        res.status(error.status).json({ error: error.message });
    };
});

router.get('/detail/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const detailedCharacter = await getCharById(id);
        res.status(200).json(detailedCharacter);
    } catch (error) {
        res.status(error.status).json({ error: error.message });
    };
})

module.exports = router;