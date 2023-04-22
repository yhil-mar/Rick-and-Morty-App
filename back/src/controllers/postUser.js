// En los controladores se debe importar los modelos del archivo que conecta la base de datos
const { User } = require('../DB_connection');

const postUser = async (email, password) => {
    if (email && password) {
        const newUser = await User.findOrCreate({
            where: { email: email},
            defaults: {password: password}
        });
        return newUser;
    } else {
        throw Error('Faltan Datos');
    }
};

module.exports = postUser;