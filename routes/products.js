var express = require('express');
var router = express.Router();

const ProductController = require('../controllers/ProductController');

router.get('/book/:id', ProductController.book); 

module.exports = router;