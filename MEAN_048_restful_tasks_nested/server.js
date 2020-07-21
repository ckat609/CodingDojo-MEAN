const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/tasks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));



require('./server/config/routes')(app);

app.listen(8000, () => console.log("Listening on port 8000"));