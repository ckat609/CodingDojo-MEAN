const {
    Dog
} = require('./../models/dog');

module.exports = {
    index: function (req, res) {
        Dog.find()
            .then(data => {
                console.log(data);
                res.render('index', {
                    dogs: data
                });
            })
            .catch(err => {
                res.render('index', {
                    errors: res.json(err)
                });
            })
    },

    show: function (req, res) {
        Dog.findOne({
                _id: req.params.id
            })
            .then(data => {
                console.log(data);
                res.render('show', {
                    dog: data
                });
            })
            .catch(err => {
                res.render('/', {
                    errors: res.json(err)
                });
            })
    },

    new: function (req, res) {
        res.render('new');
    },

    edit: function (req, res) {
        Dog.findOne({
                _id: req.params.id
            })
            .then(data => {
                console.log(data);
                res.render('edit', {
                    dog: data
                })
            });
    },

    update: function (req, res) {
        var opts = {
            runValidators: true
        };
        Dog.update({
                _id: req.params.id
            }, req.body, opts)
            .then(data => {
                console.log(data);
                res.redirect('/');
            })
            .catch(err => {
                console.log("We have an error!", err);
                for (var key in err.errors) {
                    req.flash('errors', err.errors[key].message);
                }
                res.redirect(`/dogs/edit/${req.params.id}`);
            })
    },

    destroy: function (req, res) {
        Dog.remove({
                _id: req.params.id
            })
            .then(() => res.redirect('/'))
            .catch(err => {
                for (var key in err.errors) {
                    req.flash('errors', err.errors[key].message);
                }
                res.redirect('/');
            });
    },

    create: function (req, res) {
        const dog = req.body;
        Dog.create(dog)
            .then(newDog => {
                console.log(newDog);
                res.redirect('/');
            })
            .catch(err => {
                console.log("We have an error!", err);
                for (var key in err.errors) {
                    req.flash('errors', err.errors[key].message);
                }
                res.redirect('/dogs/new');
            })
    },
}