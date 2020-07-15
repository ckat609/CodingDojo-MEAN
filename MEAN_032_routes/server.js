const express = require('express');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const flash = require('express-flash');


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

const QuoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5
    },
    quote: {
        type: String,
        required: true,
        minlength: 10
    }
});

const Quote = mongoose.model('Quote', QuoteSchema);

require('./config/routes')(app);
app.listen(8000, () => console.log("Listening on port 8000"));