const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');
const app = express();
const {
    render
} = require('ejs');

mongoose.connect('mongodb://localhost/quotes', {
    useNewUrlParser: true
});

app.use(flash());
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({
    extended: true
}));

app.use(session({
    secret: "hellokitty",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

require('./models/quote.js')
require('./config/routes')(app);
app.listen(8000, () => console.log("Listening on port 8000"));