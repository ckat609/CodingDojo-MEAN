const express = require('express');
const app = express();

app.get("/cats", (request, response) => {
    var cats_arr = [{
            name: "cat01"
        },
        {
            name: "cat02"
        },
        {
            name: "cat03"
        },
    ];
    response.render("cats", {
        cats: cats_arr
    });
});

app.get("/cat01", (request, response) => {
    var cat_info = {
        name: "Cuddles",
        color: "Gray",
        eyes: "Green",
        food: "Spaghetti",
    };
    response.render("details", {
        info: cat_info,
    });
});

app.get("/cat02", (request, response) => {
    var cat_info = {
        name: "Whiskers",
        color: "Striped Orange/Brown",
        eyes: "Hazel",
        food: "Milk",
    };
    response.render("details", {
        info: cat_info,
    });
});

app.get("/cat03", (request, response) => {
    var cat_info = {
        name: "Winnie",
        color: "Striped Gray/Black",
        eyes: "Gray",
        food: "Tuna",
    };
    response.render("details", {
        info: cat_info,
    });
});

app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");