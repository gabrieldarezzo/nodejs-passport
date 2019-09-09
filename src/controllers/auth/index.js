const express = require('express')
const router = express.Router();
const LoginController = require('./LoginController');
const isAuth = require('./../../auth/middleware');

module.exports = (passport) => {
    router.get('/', LoginController.loginForm);
    router.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/users',
        failureRedirect: '/not_allowed',
    }));
    router.get('/logout', isAuth, LoginController.logout);

    return router;
}