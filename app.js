const express = require('express');
const app = express();
let { people } = require('./node-express-course/02-express-tutorial/data');

// static assets
app.use(express.static('./node-express-course/02-express-tutorial/methods-public'));
// parse form data
app.use(express.urlencoded({extended: false}));
// parse json
app.use(express.json());

// GET method
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people});
});
app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({success: false, msg: 'please provide a name'});
    }
    return res.status(201).send({success: true});
});
// POST method
app.post('/login', (req, res) => {
    // console.log(req.body);
    const { name } = req.body;
    if (name) {
        return res.status(200). send(`Welcome ${name}`);
    } else {
        res.status(401).send('Please provide credentials ...');
    }
});


app.listen(5000, () => {
    console.log('listening on port 5000');
})