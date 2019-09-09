const express = require('express')
const router = express.Router();
const UserController = require('./UserController');
const isAuth = require('./../../auth/middleware');

module.exports = (passport) => {
    router.get('/', isAuth, UserController.all);
    router.get('/new', isAuth, UserController.new);
    router.post('/', passport.authenticate('local-signup', {
        successRedirect: '/users',
        failureRedirect: '/not_allowed',
    }));
    router.delete('/:id', isAuth, UserController.destroy);

    return router;
}