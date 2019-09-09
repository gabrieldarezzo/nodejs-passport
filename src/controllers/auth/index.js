const express = require('express')
const router = express.Router();
const LoginController = require('./LoginController');

module.exports = (passport) => {
    router.get('/', LoginController.loginForm);
    router.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/users',
        failureRedirect: '/not_allowed',
    }));

    return router;
}