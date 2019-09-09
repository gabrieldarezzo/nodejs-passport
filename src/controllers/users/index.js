const express = require('express')
const router = express.Router();
const UserController = require('./UserController');

module.exports = (passport) => {
    router.get('/', UserController.all);
    router.get('/new', UserController.new);

    router.post('/', passport.authenticate('local-signup', {
        successRedirect: '/users',
        failureRedirect: '/not_allowed',
    }));

    router.delete('/:id', UserController.destroy);
    return router;
}