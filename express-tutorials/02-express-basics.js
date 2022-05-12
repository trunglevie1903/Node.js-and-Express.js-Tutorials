const express = require('express');
const path = require('path');

const app = express();

// app.get('/', (req, res) => {
//     console.log('user hit the server');
//     res.status(200).send('Home Page');
// });

// app.get('/about', (req, res) => {
//     res.status(200).send('About Page');
// });

// app.all('*', (req, res) => {
//     res.status(404).send('<h1>Resource Not Found</h1>');
// });

// setup static and middleware;
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/node-express-course/02-express-tutorial/navbar-app/index.html'));
// });

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource Not Found</h1>');

});

app.listen(5000, () => {
    console.log('listening on port 5000');
})