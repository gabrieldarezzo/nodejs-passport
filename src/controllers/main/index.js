const express = require('express')
const router = express.Router();
const MainController = require('./MainController');
const isAuth = require('./../../auth/middleware');

router.get('/', isAuth, MainController.index);

module.exports = router