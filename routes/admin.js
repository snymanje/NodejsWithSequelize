const path = require('path');
const rootDir = require('../utils/path');
const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
})

router.post('/product', (req, res) => {
    console.log('sfsdfsfsd');
    res.json(req.body);
})

module.exports = router;