const path = require('path');
const Bikes = require('./../controllers/bikes');

module.exports = function (app) {
    app.get('/', (req, res) => {});

    app.get('/bikes', (req, res) => {
        Bikes.index(req, res);
    });

    app.get('/bikes/:id', (req, res) => {
        Bikes.show(req, res);
    });

    app.delete('/bikes/:id', (req, res) => {
        Bikes.delete(req, res);
    });

    app.patch('/bikes/:id', (req, res) => {
        Bikes.update(req, res);
    });

    app.post('/bikes', (req, res) => {
        Bikes.create(req, res);
    });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}