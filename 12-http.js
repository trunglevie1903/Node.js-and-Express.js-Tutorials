const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to ur home page');
        res.end();
    }
    else if (req.url === '/about') {
        res.end('Here is our short history');
    }
    else res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page you're looking for</p>
    <a href="/">Back to homepage</a>
    `);
});
server.listen(4321);