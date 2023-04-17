const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharByID = (req, res) => {
    const { id } = req.params;
    axios.get(URL + id).then((response) => {
        const { id, status, name, species, origin, image, gender } = response.data;
        if (response.data) {
            res.status(200).json({
                id,
                status,
                name,
                species,
                origin,
                image,
                gender
            });
        } else res.status(404).send('Not found');
    }).catch((error) => {
        res.status(500).send(error.message);
    });
};

module.exports = getCharByID;