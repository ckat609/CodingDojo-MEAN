const Tasks = require('./../controllers/tasks');

module.exports = function (app) {
    app.get('/', (req, res) => {

    });

    app.get('/tasks', (req, res) => {
        Tasks.index(req, res);
    });

    app.get('/tasks/:id', (req, res) => {
        Tasks.show(req, res);
    });
}