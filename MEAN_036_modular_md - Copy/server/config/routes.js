const Dogs = require('./../controllers/dogs');

module.exports = function (app) {
    app.get('/', (req, res) => {
        Dogs.index(req, res);
    });

    app.get('/:id', (req, res) => {
        Dogs.show(req, res);
    });

    app.get('/dogs/new', (req, res) => {
        Dogs.new(req, res);
    });

    app.post('/dogs', (req, res) => {
        Dogs.create(req, res);
    });

    app.get('/dogs/edit/:id', (req, res) => {
        Dogs.edit(req, res);
    });

    app.post('/dogs/:id', (req, res) => {
        Dogs.update(req, res);
    });

    app.post('/dogs/destroy/:id', (req, res) => {
        Dogs.destroy(req, res);
    });
}