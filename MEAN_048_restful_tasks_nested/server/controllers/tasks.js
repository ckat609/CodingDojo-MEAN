const {
    Task
} = require('./../models/task');

module.exports = {
    index: function (req, res) {
        Task.find()
            .then(data => {
                console.log(data);
                res.json({
                    tasks: data
                });
            })
            .catch(err => res.json(err))
    },
    show: function (req, res) {
        Task.findOne({
                _id: req.params.id
            })
            .then(data => {
                console.log(data);
                res.json(data);
            })
            .catch(err => res.json(err))
    },
    new: function (req, res) {
        res.json({
            task: "nothing to add"
        });
    },
    create: function (req, res) {
        aTask = new Task();
        aTask.title = req.body.title;
        aTask.description = req.body.description;
        aTask.completed = false;
        aTask.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err))
    },
    update: function (req, res) {
        Task.update({
                _id: req.params.id
            }, req.body)
            .then(data => {
                req.json(data);
            })
            .catch(err => res.json(err))
    },
    delete: function (req, res) {
        Task.remove({
                _id: req.params.id
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err))
    },
}