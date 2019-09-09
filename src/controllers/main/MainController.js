module.exports = {
    async index(req, res) {
        // return res.render('main/index')
        return res.render('main/index', {
            user: req.user || null
        })
    }
};