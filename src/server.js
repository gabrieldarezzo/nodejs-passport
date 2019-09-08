const path = require('path');
const express = require('express');

const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser')
const methodOverride = require('method-override');


const routes = require('./routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// passport.use(require('./auth/basic'));
// app.get('*', passport.authenticate('basic', { session : false }));



app.use(methodOverride('_method'))

  


app.use(passport.initialize());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));




// app.use(express.json());


app.use(routes);


mongoose.connect('mongodb://192.168.99.1:1111/passport', {
    useNewUrlParser: true,
    useFindAndModify : false,
});
app.listen(3333, () => {
    console.log(`Server started on http://localhost:3333`);
});

module.exports = app;