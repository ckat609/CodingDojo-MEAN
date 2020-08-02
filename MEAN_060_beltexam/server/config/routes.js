const path = require('path');
const Restaurants = require('../controllers/restaurants');

module.exports = function (app) {
    app.get('/', (req, res) => {});

    app.get('/api/restaurants', (req, res) => {
        Restaurants.index(req, res);
    });

    app.get('/api/restaurants/:id', (req, res) => {
        Restaurants.show(req, res);
    });

    app.post('/api/restaurants', (req, res) => {
        Restaurants.create(req, res);
    });

    app.post('/api/restaurants/:id', (req, res) => {
        Restaurants.update(req, res);
    });

    app.delete('/api/restaurants/:id', (req, res) => {
        Restaurants.delete(req, res);
    });

    app.post('/api/restaurants/:id/reviews', (req, res) => {
        Restaurants.createReview(req, res);
    });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}