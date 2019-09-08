const User = require('./../models/User')

module.exports = {
    async index(req, res) {
        /*
        return res.status(200)
            .json({
                ok : 'true'
            });
        */
       return res.render('main/index')
    },
    async new(req, res) {
        return res.render('user/new')
    },
    async all(req, res) {
        let users = await User.find({});
        return res.render('user/all', {
            users
        });

    },

    
    async store(req, res) {
        try {
            let user = User(req.body);
            user.password = user.genHash(user.password)
            
            await user.save();


            return res.redirect('/');
        } catch (e) {
            console.log(e.message);
        }
    },

    async destroy(req, res) {

        try {
            console.log(req.params.id)
            let user = await User.findByIdAndRemove(req.params.id);
            return res.redirect('/users');

        } catch (e) {
            console.log('error:', e.message);
        }
      
        
    },

    
    
};