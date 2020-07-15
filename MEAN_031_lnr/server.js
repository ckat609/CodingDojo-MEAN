const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');
const app = express();

app.use(flash());
app.use(express.static(__dirname + '/static'));
app.use(session({
    secret: "hellodolly",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));
app.use(express.urlencoded({
    extended: true,
}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

mongoose.connect('mongodb://localhost/projectx', {
    useNewUrlParser: true,
});

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "The first name field can't be left blank"],
        minlength: [1, "The minimum length of characters for the first name is 1"]
    },
    lname: {
        type: String,
        required: [true, "The last name field can't be left blank"],
        minlength: [1, "The minimum length of characters for the last name is 1"]
    },
    email: {
        type: String,
        required: [true, "The email field can't be left blank"],
        unique: true,
        lowercase: [true, "HEY"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, "The password field can't be left blank"],
        minlength: [5, "The minimum length of characters for the password is 5"],
    },
    password_confirmation: {
        type: String,
        required: [true, "The password field can't be left blank"],
        minlength: [5, "The minimum length of characters for the password is 5"],
    },
}, {
    timestamps: true
});

const User = new mongoose.model('User', UserSchema);

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/users/create', (req, res) => {
    if (req.body.password == req.body.password_confirm) {
        User.create(req.body)
            .then(newUser => {
                res.redirect('/');
            })
            .catch(err => {
                for (var key in err.errors) {
                    console.log(err.errors[key].message);
                    req.flash('errors', err.errors[key].message);
                }
                res.redirect('/');
            })
    }
    res.redirect('/');
});

app.post('/sessions/create', (req, res) => {
    User.findOne({
            email: "z@z.com"
        })
        .then(user => {
            console.log(req.body);
            console.log(user);
            console.log("YAY");
            res.redirect('/');
        })
        .catch(err => {
            console.log("NAY");
            res.redirect('/');
        })
});

app.listen(8000, () => console.log("Listening on port 8000"));