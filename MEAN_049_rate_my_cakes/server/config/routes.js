const Cakes = require('./../controllers/cakes');

module.exports = function (app) {
    app.get('/', (req, res) => {});

    app.get('/cakes', (req, res) => {
        Cakes.index(req, res);
    });

    app.post('/cakes/create', (req, res) => {
        Cakes.create(req, res);
    });

    app.post('/comments/create/:id', (req, res) => {
        Cakes.daisy(req, res);
    });

    app.get('/comments/:id', (req, res) => {
        Cakes.show(req, res);
    });
}