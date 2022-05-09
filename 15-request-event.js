
const http = require('http');

const server = htpp.createServer();

server.on('request', (req, res) => {
    res.end('Welcome');
});

server.listen(4321);