const path = require('path');
const Businesses = require('../controllers/businesses');

module.exports = function (app) {
    app.get('/', (req, res) => {});

    app.get('/businesses', (req, res) => {
        Businesses.index(req, res);
    });

    app.get('/businesses/:id', (req, res) => {
        Businesses.show(req, res);
    });

    app.post('/businesses', (req, res) => {
        Businesses.create(req, res);
    });

    app.post('/businesses/:id', (req, res) => {
        Businesses.update(req, res);
    });

    app.delete('/businesses/:id', (req, res) => {
        Businesses.delete(req, res);
    });

    app.post('/businesses/:id/reviews', (req, res) => {
        Businesses.createReview(req, res);
    });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}