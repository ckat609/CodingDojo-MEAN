const {
    Author
} = require('./../models/author');

module.exports = {

    index: function (req, res) {
        Author.find()
            .then(data => {
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
                res.json(data)
            })
            .catch(err => res.json(err));
    },

    update: function (req, res) {
        Author.findById(
                req.body._id
            )
            .then(data => {
                author = data;
                author.name = req.body.name;
                author.quotes = req.body.quotes;
                author.save()
                    .then(data => {
                        res.json(data)
                    })
                    .catch(err => {
                        res.json(err)
                    });
            })
            .catch(err => res.json(err));
    },

    delete: function (req, res) {
        Author.deleteOne({
                _id: req.params.id
            })
            .then(data => {
                res.json(err)
            })
            .catch(err => res.json(err));
    },

    upvote: function (req, res) {
        Author.updateOne
    },
}