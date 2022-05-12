const express = require('express');
const app = express();
const { products } = require('./node-express-course/02-express-tutorial/data');

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1><a href="./api/products">products</a>');
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map(product => {
        const {id, name, price} = product;
        return {id, name, price};
    });
    res.json(newProducts);  
});

app.get('/api/products/:id', (req, res) => {
    // console.log(req.params.id);
    const singleProduct = products.find((product) => product.id.toString() === req.params.id)
    if (!singleProduct) {
        return res.status(404).send('Product not found');
    }
    return res.json(singleProduct);
});

app.get('/api/products/:prod_id/reviews/:rev_id', (req, res) => {
    console.log(req.params);
});

app.get('/api/v1/query', (req, res) => {
    // console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    if (search) {
        sortedProducts = sortedProducts.filter(product => {
            return product.name.startsWith(search);
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        return res.status(200).send({success: 'true', data: []});
    }
    return res.status(200).json(sortedProducts);
    // res.send('Hello');
});

app.listen(5000, () => {
    console.log('listening on port 5000');
})