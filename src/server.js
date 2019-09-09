const path = require('path');
const express = require('express');

const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser')
const methodOverride = require('method-override');




const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** PASSPORT Basic */
// passport.use(require('./auth/basic'));
// app.get('*', passport.authenticate('basic', { session : false }));

/** PASSPORT Local */
require('./auth/local')(passport);


app.use(methodOverride('_method'))

app.use(session({
    secret : '!@dJ3E128312',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));




// app.use(express.json());

// const routes = require('./routes');
// app.use(routes);

require('./routes')(app, passport)


mongoose.connect('mongodb://192.168.99.1:1111/passport', {
    useNewUrlParser: true,
    useFindAndModify : false,
});
app.listen(3333, () => {
    console.log(`Server started on http://localhost:3333`);
});

module.exports = app;