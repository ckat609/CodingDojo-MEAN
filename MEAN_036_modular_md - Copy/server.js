const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');
const app = express();

app.use(express.static(__dirname + '/MEAN39helloangular/dist/MEAN039helloangular'));
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

require('./server/config/routes')(app);

app.listen(8000, () => console.log("Listening on port 8000"));