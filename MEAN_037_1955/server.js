const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/1955', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name of person is required"],
        unique: true,
        minlength: [5, "Name length must be at least 5 characters long"]
    },
}, {
    timestamps: true
})
const Person = new mongoose.model('Person', PersonSchema);

app.get('/', (req, res) => {
    Person.find()
        .then(data => {
            console.log(data);
            res.json(data);
        })
        .catch(err => res.json(err))
});

app.get('/new/:name', (req, res) => {
    Person.create({
            name: req.params.name
        })
        .then(data => {
            res.redirect('/')
        })
        .catch(err => res.json(err))
});

app.get('/remove/:name', (req, res) => {
    Person.remove({
            name: req.params.name
        })
        .then(data => {
            res.redirect('/')
        })
        .catch(err => res.json(err))
});

app.get('/:name', (req, res) => {
    Person.findOne({
            name: req.params.name
        })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        })
});


app.listen(8000, () => console.log("Listening on port 8000"));