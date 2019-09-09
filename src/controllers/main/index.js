const express = require('express')
const router = express.Router();
const MainController = require('./MainController');

router.get('/', MainController.index);
module.exports = router