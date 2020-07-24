const {
    Author
} = require('./../models/author');

module.exports = {

    index: function (req, res) {
        Author.find()
            .then(data => {
                console.log(data);
                res.json({
                    authors: data
                });
            })
            .catch(err => console.log(err))
    },

    create: function (req, res) {
        Author.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    show: function (req, res) {
        Author.findOne({
                _id: req.params.id
            })
            .then(data => {
                console.log
                res.json(data)
            })
            .catch(err => res.json(err));
    },

    update: function (req, res) {
        Author.update({
                _id: req.params.id
            }, {
                name: req.body.name
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
    },

    delete: function (req, res) {
        console.log("WTF")
        Author.deleteOne({
                _id: req.params.id
            })
            .then(data => {})
            .catch(err => res.json(err));
    }
}