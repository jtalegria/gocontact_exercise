'use strict'

const app = require('../src/app');
const debug = require('debug');
const http = require('http');

const port = normalizePort(process.env.PORT || '8000');
app.set('port', port);

const server = http.createServer(app);
server.listen(port)
server.on('error', onError);            //EVENTO DE ERROS
server.on('listening', onListening)     //EVENTO LISTENING

console.log('API running on port ' + port)

function normalizePort(value) {
    const port = parseInt(value, 10);

    if (isNaN(port)) {
        return value;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':  // PERMISSION ERROR
            console.error(bind + 'requires elevated privileges');
            process.exit(1);
            break;

        case 'EADDRINUSE': //ADDRESS IN USE ERROR
            console.error(bind + 'is already in use');
            process.exit(1);
            break;

        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;

    debug('Listening on ' + bind)
}