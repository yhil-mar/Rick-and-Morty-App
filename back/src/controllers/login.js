const { User } = require('../DB_connection');

const login = async (email, password) => {
    if (email && password) {
        const user = await User.findOne({
            where: { email: email }
        });
        if (user) {
            if (password === user.password) {
                return { access: true }
            } else {
                const error = new Error('Contraseña incorrecta');
                error.status = 403;
                throw error
            }

        } else {
            const error = new Error('Usuario no encontrado');
            error.status = 404;
            throw error
        }

    } else {
        const error = new Error('Faltan Datos');
        error.status = 400;
        throw error
    };
};

module.exports = login;