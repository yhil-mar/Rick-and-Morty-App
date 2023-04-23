const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharByID = async (id) => {
    try {
        const response = await axios.get(URL + id);
        const { status, name, species, origin, image, gender } = response.data;
        if (response.data) {
            return {
                id,
                status,
                name,
                species,
                origin: origin.name,
                image,
                gender
            };
        } else {
            const error = new Error('Not found');
            error.status = 404;
            throw error;
        };
    } catch (error) {
        error.status = 500;
        throw error;
    };
};

module.exports = getCharByID;