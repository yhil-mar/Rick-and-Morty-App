const { User } = require('../DB_connection');

const login = async (email, password) => {
    if (email && password) {
        try {
            const user = await User.findOne({
                where: { email: email }
            });
            if (user) {
                if (password === user.password) {
                    return { access: true, status: 200}
                } else {
                    return { access: false, status: 403, message: 'Contraseña incorrecta'};
                }
            } else {
                return { access: false, status: 404, message: 'Usuario no encontrado'};
            }
        } catch (error) {
            throw error;
        };

    } else {
        return { access: false, status: 400, message: 'Faltan datos'};
    };
};

module.exports = login;