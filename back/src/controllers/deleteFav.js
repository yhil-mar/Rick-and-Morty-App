const { Favorite } = require('../DB_connection');

const deleteFav = async (id) => {
    if(!isNaN(Number(id))){
        try {
            const fav = await Favorite.findByPk(id);
            if (fav) {
                await fav.destroy();
                return await Favorite.findAll();
            } else {
                const error = Error('id incorrecto');
                error.status = 404;
                throw error;
            }
        } catch (error) {
            // error.status = 500;
            throw error;
        }
    } else {
        const error = new Error('el id debe ser un número');
        error.status = 403;
        throw error;
    }
};

module.exports = deleteFav;