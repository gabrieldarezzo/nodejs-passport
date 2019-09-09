const User = require('./../../models/User')
module.exports = {
    async loginForm(req, res) {
        return res.render('auth/login')
    },
    async notAllowed(req, res) {
        return res.json({
            status: false,
            message: 'Login errado',
        });
    },
    async login(req, res) {
        
    },
};