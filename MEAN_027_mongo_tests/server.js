const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();
const flash = require('express-flash');
app.use(flash());

mongoose.connect('mongodb://localhost/test1', {
    useNewUrlParser: true
})

app.use(express.static(__dirname + "/static"));

app.use(express.urlencoded({
    extended: true
}));

app.use(session({
    secret: "hellokitty",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 6
    },
    age: {
        type: Number,
        min: 1,
        max: 150
    },
}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);

app.get('/', (req, res) => {
    User.find()
        .then(data => res.render('index', {
            users: data
        }))
        .catch(err => {
            res.json(err)

        });
});

app.post('/users', (req, res) => {
    const user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.save()
        .then(() => res.redirect('/'))
        .catch(err => {
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for (var key in err.errors) {
                console.log(err.errors[key].message);
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        });
});


app.listen(8000, () => console.log("Listening on port 8000"));