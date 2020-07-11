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
    secret: "kittykeyboard",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));

app.get('/', (request, response) => {
    if (!request.session.count) {
        request.session.count = 1;
    } else {
        request.session.count++;
    }
    let count = 0;
    response.locals.count = request.session.count;
    response.render('index');
});

app.get('/add', (request, response) => {
    request.session.count++;
    response.redirect('/');
});

app.get('/reset', (request, response) => {
    request.session.count = 0;
    response.redirect('/');
});

app.listen(8000, () => console.log('listening on port 8000'));