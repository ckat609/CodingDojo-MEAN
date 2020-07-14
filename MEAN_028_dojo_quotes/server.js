const express = require('express');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const flash = require('express-flash');
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

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/quotes', (req, res) => {
    const quote = new Quote(req.body);
    quote.save()
        .then(() => res.redirect('/quotes'))
        .catch(err => {
            for (var key in err.errors) {
                req.flash('errors', err.errors[key].message);
            }
            res.redirect('/');
        });
});

app.get('/quotes', (req, res) => {
    Quote.find().sort({
            _id: -1
        })
        .then(quotes => {
            console.log(quotes)
            res.render('quotes', {
                quotes: quotes
            });
        })
        .catch(err => {
            for (var key in err.errors) {
                req.flash('errors', err.errors[key].message)
            }
            res.redirect('/');
        });
});

app.listen(8000, () => console.log("Listening on port 8000"));