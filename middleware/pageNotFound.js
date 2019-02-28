const path = require('path');
const rootDir = require('../utils/path');
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log(`Middleware running`)
    console.log(path.join(__dirname, '../', 'views', '404.html'))
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
    next()
})

module.exports = router;