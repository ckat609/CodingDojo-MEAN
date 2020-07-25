const {
    Note
} = require('./../models/note');

module.exports = {
    index: function (req, res) {
        Note.find().sort({
                createdAt: -1
            })
            .then(data => {
                console.log("SORTED")
                res.json(data);
            })
            .catch(err => res.json(err));
    },

    show: function (req, res) {
        Note.findOne({
                _id: req.params.id
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
    },

    create: function (req, res) {
        let aNote = new Note();
        aNote.text = req.body.text;
        aNote.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
    },
    delete: function (req, res) {
        Note.remove({
                _id: req.params.id
            })
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
    },
    // show: {},
    // new: {},
    // create: {},
    // edit: {},
    // update: {},
}