const mongoose = require('mongoose');

Quote = new mongoose.model('Quote');

module.exports = function (app) {
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

}