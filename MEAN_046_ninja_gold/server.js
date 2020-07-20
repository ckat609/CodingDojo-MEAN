const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(session({
    secret: "thesearch",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));

mongoose.connect('mongodb://localhost/ninja', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

require('./server/config/routes')(app);

app.listen(8000, () => console.log("Listening on port 8000"));