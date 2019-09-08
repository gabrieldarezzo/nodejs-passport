const express = require('express');
const MainController = require('./controllers/MainController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

// Rota base, apenas para verificar se está funcionando

routes.get('/', (req, res) => {
    return res.json({
        message: "It's Work!"
    });    
});
routes.get('/main/index', MainController.index);
routes.get('/users', UserController.all);
routes.get('/users/new', UserController.new);
routes.post('/users', UserController.store);
routes.delete('/users/:id', UserController.destroy);




module.exports = routes;