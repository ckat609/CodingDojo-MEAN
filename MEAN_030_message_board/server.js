const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(flash());
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({
    extended: true,
}));

app.use(session({
    secret: "hellokitty",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    },
}));

mongoose.connect('mongodb://localhost/messages', {
    useNewUrlParser: true,
});


const CommentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Comments must have a title"],
        minlength: 5,
    },
    content: {
        type: String,
        required: [true, "Comments must have content"],
        minlength: 10,
    },

}, {
    timestamps: true
});

const MessageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Messages must have a name"],
        minlength: [2, "Name must be at least 2 characters long"],
    },
    content: {
        type: String,
        required: [true, "Messages must have content"],
        minlength: [10, "Message must be at least 10 characters long"],
    },
    comments: [CommentSchema]
}, {
    timestamps: true
});

const Message = mongoose.model('Message', MessageSchema);
const Comment = mongoose.model('Comment', CommentSchema);

app.get('/', (req, res) => {
    Message.find()
        .then(messages => {
            res.render('index', {
                allmessages: messages
            });
        })
        .catch(err => {
            for (var key in err.errors) {
                req.flash('happy', err.errors[key].message)
            }
            res.redirect('/');
        })
});

app.post('/create', (req, res) => {
    Message.create(req.body)
        .then(newMessage => {
            res.redirect('/');
        })
        .catch(err => {
            for (var key in err.errors) {
                req.flash('happy', err.errors[key].message)
            }
            res.redirect('/');
        });
});

app.post('/comments/create/:id', (req, res) => {
    Comment.create(req.body)
        .then(newComment => {
            Message.update({
                    _id: req.params.id
                }, {
                    $push: {
                        comments: newComment
                    }
                })
                .then(data => {
                    res.redirect('/');
                })
                .catch(err => {
                    for (var key in err.errors) {
                        req.flash('happy', err.errors[key].message)
                    }
                    res.redirect('/');
                });

        })
        .catch(err => {
            for (var key in err.errors) {
                req.flash('happy', err.errors[key].message)
            }
            res.redirect('/');
        });

});

app.listen(8000, () => console.log("Listening on port 8000"));