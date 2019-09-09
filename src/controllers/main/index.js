const express = require('express')
const router = express.Router();
const MainController = require('./MainController');
const isAuth = require('./../../auth/middleware');

router.get('/', MainController.index);

module.exports = router