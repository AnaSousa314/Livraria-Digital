var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserController');

router.get('/login', UserController.login);

router.get('/create', UserController.create);

router.post('/save', UserController.save);

router.post('/authenticate',UserController.authenticate);

router.get('/logout',UserController.logout);

module.exports = router;
