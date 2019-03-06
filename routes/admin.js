const path = require('path');

const express = require('express');

const addProductsController = require('../controllers/products')

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', addProductsController.getAddproduct);

// /admin/add-product => POST
router.post('/add-product', addProductsController.postAddproduct);

module.exports = router;
