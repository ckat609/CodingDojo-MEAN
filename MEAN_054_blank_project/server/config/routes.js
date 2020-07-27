const path = require('path');
const Generics = require('./../controllers/generics');

module.exports = function (app) {
    app.get('/', (req, res) => {});

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}