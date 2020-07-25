const path = require('path');
const Notes = require('./../controllers/notes');

module.exports = function (app) {
    app.get('/', (req, res) => {});

    app.get('/notes', (req, res) => {
        Notes.index(req, res);
    });

    app.get('/notes/:id', (req, res) => {
        Notes.show(req, res);
    });

    app.post('/notes', (req, res) => {
        Notes.create(req, res);
    });

    app.delete('/notes/:id', (req, res) => {
        Notes.delete(req, res);
    });

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}