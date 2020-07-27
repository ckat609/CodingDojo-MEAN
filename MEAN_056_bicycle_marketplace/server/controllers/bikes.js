const {
    Bike
} = require('./../models/bike');

module.exports = {
    index: function (req, res) {
        Bike.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
    },
    show: function (req, res) {
        Bike.findOne({
                _id: req.params.id
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
    },
    delete: function (req, res) {
        Bike.remove({
                _id: req.params.id
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
    },
    update: function (req, res) {
        Bike.findById(req.body._id)
            .then(data => {
                aBike = data;
                aBike.title = req.body.title;
                aBike.image = req.body.image;
                aBike.price = req.body.price;
                aBike.location = req.body.location;
                aBike.description = req.body.description;
                aBike.save()
                    .then(data => {
                        res.json(data);
                    })
                    .catch(err => {
                        res.json(err);
                    });
            })
            .catch(err => res.json(err));
    },
    create: function (req, res) {
        let aBike = new Bike();
        aBike.title = req.body.title;
        aBike.image = req.body.image;
        aBike.price = req.body.price;
        aBike.location = req.body.location;
        aBike.description = req.body.description;
        aBike.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    },
    // new: function (req, res) {},
    // edit: function (req, res) {},
}