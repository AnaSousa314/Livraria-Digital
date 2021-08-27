var express = require('express');
var router = express.Router();

const CartController = require('../controllers/CartController');

router.get('/:id', CartController.cart);
router.get('/delete/:id', CartController.delete);
router.get('/create/:bookid/:total',CartController.create);


module.exports = router;