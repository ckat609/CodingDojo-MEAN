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
                res.json({
                    task: data
                });
            })
            .catch(err => res.json(err))
    },
    new: function (req, res) {
        res.json({
            task: "nothing to add"
        });
    },
    create: function (req, res) {
        Task.create(req.body)
            .then(data => {
                res.redirect('/');
            })
            .catch(err => res.json(err))
    },
    edit: function (req, res) {
        res.json({
            task: "nothing to edit"
        });
    },
    update: function (req, res) {
        Task.update({
                _id: req.params.id
            }, {
                title: req.body
            })
            .then(data => {
                res.redirect('/');
            })
            .catch(err => res.json(err))
    },
    delete: function (req, res) {
        Task.remove(req.params.id)
            .then(data => {
                res.redirect('/');
            })
            .catch(err => res.json(err))
    },
}