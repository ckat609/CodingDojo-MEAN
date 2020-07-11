const express = require('express');
const app = express();
const session = require('express-session');

app.use(express.static(__dirname + '/stati'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({
    extended: true
}));

app.use(session({
    secret: "keyboardkitty",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));

app.get('/', (request, response) => {
    if (request.session.name) {
        let name = request.session.name;
        delete request.session.name;
        response.send(`SUP ${name}!`);
    } else {
        response.send(`SUP CULEROS!`);
    }
});

app.get('/users/:name', (request, response) => {
    response.send(`SUP ${request.params.name}`);
});

app.get('/new', (request, response) => {
    response.render('index');
});

app.post('/create', (request, response) => {
    request.session.name = request.body.name;
    console.log(request.session.name);
    response.redirect('/')
});

app.listen(8000, () => console.log('Listening on port 8000'));