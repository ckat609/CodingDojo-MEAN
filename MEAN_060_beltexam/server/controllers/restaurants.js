const {
    Restaurant
} = require('../models/restaurant');
const {
    Review
} = require('../models/review');

module.exports = {
    index: function (req, res) {
        Restaurant.find().sort({
                totalstars: -1
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
    },
    show: function (req, res) {
        Restaurant.findOne({
                _id: req.params.id
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
    },
    delete: function (req, res) {
        Restaurant.remove({
                _id: req.params.id
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
    },
    create: function (req, res) {
        Restaurant.find({
                name: req.body.name,
            })
            .then(data => {
                if (data.length > 0) {
                    res.json({
                        helloworld: "That restaurant name has already been taken"
                    });
                } else {
                    console.log("DOES NOT EXIST - WILL ADD");
                    let aRestaurant = new Restaurant();
                    aRestaurant.name = req.body.name;
                    aRestaurant.cuisine = req.body.cuisine;
                    aRestaurant.description = req.body.description;
                    aRestaurant.save()
                        .then(data => {
                            res.json(data);
                        })
                        .catch(err => {
                            res.json(err)
                        });
                }
                console.log(data);
            })
            .catch(err => res.json(err));
        //****************************************************************///
        // let aRestaurant = new Restaurant();
        // aRestaurant.name = req.body.name;
        // aRestaurant.cuisine = req.body.cuisine;
        // aRestaurant.description = req.body.description;
        // aRestaurant.save()
        // .then(data => {
        //     res.json(data);
        // })
        // .catch(err => {
        //     res.json(err)
        // });
        //****************************************************************///
    },
    update: function (req, res) {
        Restaurant.findById(req.params.id)
            .then(data => {
                console.log(data);
                let aRestaurant = data;
                aRestaurant.name = req.body.name;
                aRestaurant.cuisine = req.body.cuisine;
                aRestaurant.description = req.body.description;
                aRestaurant.save()
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
                Restaurant.updateOne({
                        _id: req.params.id
                    }, {
                        $push: {
                            reviews: data,
                        },

                        $inc: {
                            revcount: 1,
                            totalstars: req.body.rating
                        },

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