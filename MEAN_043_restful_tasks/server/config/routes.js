const Tasks = require('./../controllers/tasks');

module.exports = function (app) {
    // app.get('/', (req, res) => {

    // });

    app.get('/tasks', (req, res) => {
        console.log("I'm in the routes!");
        Tasks.index(req, res);
    });

    app.get('/tasks/:id', (req, res) => {
        Tasks.show(req, res);
    });

    app.post('/tasks', (req, res) => {
        Tasks.create(req, res);
    });

    app.put('/tasks/:id/update/:name', (req, res) => {
        Tasks.update(req, res);
    });

    app.delete('/tasks/:id', (req, res) => {
        Tasks.destroy(req, res);
    });
}