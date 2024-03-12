const express = require('express');
const { products } = require('./data')

const app = express();
app.use(express.static('./public'))


app.get('/api/v1/test', (req, res) => {
    res.json({ message: 'It worked!' })
});

app.get('/api/v1/products', (req, res) => {
    res.json(products)
});

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID); 
    const product = products.find((p) => p.id === idToFind);
    if(idToFind === NaN || !product) {
        return res.json({ message: "Unfortunately, that product was not found." })
    }
    return res.json(product);
});

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
    let searchedProducts = []; 
    if(search) {
        searchedProducts = products.filter((product) => {
            return product.name.startsWith(search)
        });
    }

    if(limit) {
        searchedProducts = searchedProducts.slice(0, parseInt(limit))
    }

    if(!searchedProducts.length) {
        return res.json({ message: 'Product you are searching not found' })
    }

    return res.json(searchedProducts)
})

app.all('*', (req, res) => {
    res.status(404).send(`<h1>Not found</h1>`)
});

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})
