const {
    Cake
} = require('./../models/cake');
const {
    Comment
} = require('./../models/comment');

module.exports = {
    index: function (req, res) {
        Cake.find()
            .then(data => {
                console.log(data);
                res.json({
                    cakes: data
                });
            })
            .catch(err => res.json(err));
    },
    create: function (req, res) {
        Cake.create(req.body)
            .then(data => {
                console.log(req.body);
                res.json(data);
            })
            .catch(err => res.json(err));
    },

    daisy: function (req, res) {
        Comment.create(req.body)
            .then(data => {
                console.log("CONTROLLER");
                Cake.update({
                        _id: req.params.id
                    }, {
                        $push: {
                            comments: data,
                        }
                    })
                    .then(cake => {
                        req.json(data);
                    })
            })
            .catch(err => res.json(err));
    },

    show: function (req, res) {
        Cake.findOne({
                _id: req.params.id
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
    },
}