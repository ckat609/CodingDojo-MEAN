const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');
const app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({
    extended: true
}));
app.use(flash());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(session({
    secret: "hellokitty",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));

mongoose.connect('mongodb://localhost/pack', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    breed: {
        type: String,
        required: true,
        minlength: 3
    },
    color: {
        type: String,
        required: true,
        minlength: 3
    },
});

const Dog = mongoose.model('Dog', DogSchema);

app.get('/', (req, res) => {
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
});

app.get('/:id', (req, res) => {
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
});

app.get('/dogs/new', (req, res) => {
    res.render('new');
});

app.get('/dogs/edit/:id', (req, res) => {
    Dog.findOne({
            _id: req.params.id
        })
        .then(data => {
            console.log(data);
            res.render('edit', {
                dog: data
            })
        });
});

app.post('/dogs/:id', (req, res) => {
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
});

app.post('/dogs/destroy/:id', (req, res) => {
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
});

app.post('/dogs', (req, res) => {
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
});


app.listen(8000, () => console.log("Listening on port 8000"));