const path = require('path');
const Authors = require('./../controllers/authors')

module.exports = function (app) {
    app.get('/', (req, res) => {});

    app.get('/authors', (req, res) => {
        Authors.index(req, res);
    });

    app.post('/authors/create', (req, res) => {
        Authors.create(req, res);
    });

    app.patch('/authors/:id', (req, res) => {
        Authors.update(req, res);
    });

    app.get('/authors/:id', (req, res) => {
        Authors.show(req, res);
    });

    app.delete('/authors/:id/delete', (req, res) => {
        console.log("ROUTE")
        Authors.delete(req, res);
    });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}