const {
    Business
} = require('../models/business');
const {
    Review
} = require('../models/review');

module.exports = {
    index: function (req, res) {
        Business.find()
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
    },
    show: function (req, res) {
        Business.findOne({
                _id: req.params.id
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
    },
    delete: function (req, res) {
        Business.remove({
                _id: req.params.id
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
    },
    create: function (req, res) {
        let aBusiness = new Business();
        aBusiness.name = req.body.name;
        aBusiness.address = req.body.address;
        aBusiness.description = req.body.description;
        aBusiness.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err)
            });
    },
    update: function (req, res) {
        Business.findById(req.params.id)
            .then(data => {
                console.log(data);
                let aBusiness = data;
                aBusiness.name = req.body.name;
                aBusiness.address = req.body.address;
                aBusiness.description = req.body.description;
                aBusiness.save()
                    .then(data => {
                        res.json(data);
                    })
                    .catch(err => {
                        res.json(err)
                    });
            })
    },



    createReview: function (req, res) {
        let aReview = new Review();
        aReview.title = req.body.title;
        aReview.rating = req.body.rating;
        aReview.text = req.body.text;
        aReview.save()
            .then(data => {
                Business.updateOne({
                        _id: req.params.id
                    }, {
                        $push: {
                            reviews: data,
                        }
                    })
                    .then(cake => {
                        res.json(data);
                    })
            })
            .catch(err => res.json(err));
    },
    new: function (req, res) {},
    edit: function (req, res) {},
}