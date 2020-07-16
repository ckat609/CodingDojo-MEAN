const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');
const app = express();


app.use(flash());
app.use(express.static(__dirname + "/public/dist/public"));


mongoose.connect('mongodb://localhost/tasks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', (req, res) => {});

app.listen(8000, () => console.log("Listening on port 8000"));