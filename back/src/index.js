const express = require('express');
const mainRouter = require('./routes/index');
const morgan = require('morgan');
const { conn } = require('./DB_connection');

const server = express();
const PORT = 3001;

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use(express.json());

server.use(morgan('dev'));

server.use('/rickandmorty', mainRouter);

// Aquí se hace la conexión del servidor con la base de datos que viene con "conn" la cual vendrá acompañada de un then que si todo sale bien, levantará el servidor.

conn
    .sync({ alter: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log(('Server raised in port: ' + PORT));
        });
    });