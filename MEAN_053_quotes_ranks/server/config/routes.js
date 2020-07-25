const path = require('path');
const Authors = require('./../controllers/authors');
const Quotes = require('./../controllers/quotes');

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
        Authors.delete(req, res);
    });

    app.patch('/quotes/upvote/:id', (req, res) => {
        Authors.upvote(req, res);
    });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}