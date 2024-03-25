const express = require('express');
const app = express();
const { products, people } = require('./data');
const peopleRouter = require('./routes/people');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('./methods-public'));
app.use('/api/v1/people', peopleRouter)

const logger = (req, res, next) => {
    const { method,  url} = req;
    console.log(method, url, Date())
    next()
}

// app.post('/api/v1/people', (req, res) => {
// 	const { name } = req.body
// 	if (!name) {
// 		return res
// 			.status(400)
// 			.json({ success: false, message: 'Please provide a name' })
// 	}
// 	people.push({ id: people.length + 1, name: name })
// 	res.status(201).json({ success: true, name: name })
// });

// app.get('/api/v1/people', (req, res) => {
// 	res.json(people)
// });


app.get('/api/v1/test', logger, (req, res) => {
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
