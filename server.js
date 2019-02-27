const express = require('express');

const app = express();
const PORT = 5000;

app.use((req, res, next) => {
    console.log(`Middleware running`)
    next()
})

app.get('/', (req, res) => {
    console.log(`Route request`)
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/products', (req, res) => {
    console.log(`Products`)
    res.send('<h1>Products!</h1>')
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});