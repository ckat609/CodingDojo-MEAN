const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({
    extended: true
}));

app.use(session({
    secret: "howdoyoudo",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));

app.get('/', (request, response) => {
    response.send('HELLO');
});

app.get('/view', (request, response) => {
    response.render('index');
});

app.get('/result', (request, response) => {
    let survey = {
        name: request.session.name,
        location: request.session.location,
        language: request.session.language,
        comment: request.session.comment
    }
    response.render('result', {
        info: survey
    });
});

app.post('/new', (request, response) => {
    request.session.name = request.body.name;
    request.session.location = request.body.location;
    request.session.language = request.body.language;
    request.session.comment = request.body.comment;
    response.redirect('/result');
});

app.listen(8000, () => console.log('Listening on port 8000'));