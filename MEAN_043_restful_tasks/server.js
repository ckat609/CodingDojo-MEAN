const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.static(__dirname + "/public/dist/public"));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
mongoose.connect('mongodb://localhost/tasks', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

require('./server/config/routes')(app);


app.listen(8000, () => console.log("Listening on 8000"));