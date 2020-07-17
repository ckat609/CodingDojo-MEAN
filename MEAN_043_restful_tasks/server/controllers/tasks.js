const {
    Task
} = require('./../models/task');

module.exports = {
    index: function (req, res) {
        console.log("I'm in the controller!")
        Task.find()
            .then(data => {
                console.log(data);
                res.json(data);
            })
            .catch(err => res.json(err))
    },

    show: function (req, res) {
        Task.findOne({
                _id: req.params.id
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err))
    },

    create: function (req, res) {
        Task.create(req.body)
            .then(data => {
                res.redirect('/');
            })
            .catch(err => res.json(err))
    },

    update: function (req, res) {
        Task.update(req.params.id, req.body)
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