const LoginController = require('./controllers/auth/LoginController');

module.exports = (app, passport) => {
    app.use('/', require('./controllers/main/index'))
    app.use('/users', require('./controllers/users/index')(passport))
    app.use('/auth', require('./controllers/auth/index')(passport))
    app.use('/not_allowed', LoginController.notAllowed)
};