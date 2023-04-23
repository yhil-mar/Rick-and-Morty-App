const { Favorite } = require('../DB_connection');

const postFav = async (id, name, origin, status, image, species, gender) => {
    if (id && name && origin && status && image && species && gender) {
        try {
            await Favorite.findOrCreate({
                where: { id: id },
                defaults: {
                    name: name,
                    origin: origin,
                    status: status,
                    image: image,
                    species: species,
                    gender: gender
                }
            });
            const favorites = await Favorite.findAll();
            return favorites;
        } catch (error) {
            error.status = 500;
            throw error;
        }
    } else {
        const error = new Error('Faltan Datos');
        error.status = 401;
        throw error;
    }
};

module.exports = postFav;