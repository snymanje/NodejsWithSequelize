const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    console.log(`Middleware running`)
    next()
})

app.get('/', (req, res) => {
    console.log(`Route request`)
    res.send('<form action="/api/products" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
})

app.post('/api/products', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});