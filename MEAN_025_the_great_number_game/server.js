const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({
    extended: true
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(session({
    secret: "this is a secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));

app.get('/', (request, response) => {
    if (!request.session.secret) {
        request.session.secret = Math.floor(Math.random() * 100);
    }

    response.render('index', {
        message: request.session.message
    });
});

app.post('/check', (request, response) => {
    if (Number(request.body.guess) > 0 && Number(request.body.guess) <= 100) {
        request.session.message = "";
        let guess = Number(request.body.guess);
        if (request.session.secret == guess) {
            request.session.message = "You win!";
        }
        if (request.session.secret < guess) {
            request.session.message = "Too high!";
        }
        if (request.session.secret > guess) {
            request.session.message = "Too low!";
        }
    } else {
        request.session.message = "That was not a number!"
    }
    response.redirect('/');
});

app.post('/reset', (request, response) => {
    delete request.session.message;
    delete request.session.secret;
    response.redirect('/');
});

app.listen(8000, () => console.log("Listening on port 8000"));