const path = require('path');

const express = require('express');

const addProductsController = require('../controllers/products')

const router = express.Router();

router.get('/', addProductsController.getProducts);

module.exports = router;
