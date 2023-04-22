const { Favorite } = require('../DB_connection');

const postFav = async (name, origin, status, image, species, gender) => {
    if (name && origin && status && image && species && gender) {
        Favorite.findOrCreate({
            where: { name: name },
            default: {
                origin,
                status,
                image,
                species,
                gender
            }

        });
        const favorites = Favorite.findAll();
        return favorites;
    } else {
        const error = new Error('Faltan Datos');
        error.status = 401;
        throw error;
    }
};

module.exports = postFav;