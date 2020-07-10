const express = require("express");
const app = express();

app.get("/cars", (request, response) => {
    // hard-coded user data
    response.render('cars');
});

app.get("/cats", (request, response) => {
    response.render('cats');
});

app.get("/cars/new", (request, response) => {
    response.render('form');
});

app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');