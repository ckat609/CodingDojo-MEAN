const {
    Comment
} = require('./../models/Comment');
const {
    Cake
} = require('./../models/cake');

module.exports = {
    create: function (req, res) {
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
    }
}