const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./node-express-course/02-express-tutorial/navbar-app/index.html');
const homeStyle = readFileSync('node-express-course/02-express-tutorial/navbar-app/styles.css');
const homeLogo = readFileSync('node-express-course/02-express-tutorial/navbar-app/logo.svg');
const homeLogic = readFileSync('node-express-course/02-express-tutorial/navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    switch (req.url) {
        case '/':
            console.log('user hit the server ?');
            res.writeHead(200 , {'Content-Type': 'text/html'});
            res.write(homePage);
            res.end();
            break;
        case '/styles.css':
            res.writeHead(200 , {'Content-Type': 'text/css'});
            res.write(homeStyle);
            res.end();
            break;
        case '/logo.svg':
            res.writeHead(200 , {'Content-Type': 'image/svg+xml'});
            res.write(homeLogo);
            res.end();
            break;
        case '/browser-app.js':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(homeLogic);
            res.end();
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1>About Page</h1>');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Unknown URL');
            break;
    }
});

server.listen(5000);