const express = require('express');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const notFoundMiddleware = require('./middleware/pageNotFound');

const bodyParser = require('body-parser');

const app = express();

const PORT = 5000;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', shopRoutes);
app.use('/admin', adminRoutes);
app.use(notFoundMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});