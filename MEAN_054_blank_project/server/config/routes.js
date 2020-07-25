const path = require('path');
const Controllers = require('./../controllers/controllers');

module.exports = function (app) {
    app.get('/', (req, res) => {});

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}