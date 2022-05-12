const express = require('express');
const app = express();
const logger = require('./express-tutorials/04-logger');
const authorize = require('./express-tutorials/authorize');

// app.use('/api', logger); // use logger func for all url start with /api
app.use([logger, authorize]); // use for all urls

app.get('/', (req, res) => {
    res.send('Home Page');
});
app.get('/about',(req, res) => {
    res.send('About');
});
app.get('/api/products',(req, res) => {
    res.send('Products');
});
app.get('/api/items',(req, res) => {
    res.send('Items');
});

app.listen(5000, () => {
    console.log('listening on port 5000');
})