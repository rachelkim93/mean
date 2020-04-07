var express = require("express");
console.log("Let's find out what express is", express);
var app = express();
console.log("Let's find out what app is", app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

app.get('/', function(request, response) {
    response.send(index.html);
})

app.get("/cats", function(request, response){
    response.render('cats');
})

app.get("/cuddles", function(request, response){
    var cat_array = [
        {name: "Cuddles", food: "Fish", age: "6", sleep1: "Everywhere", sleep2: "On my face"}
    ];
    response.render('details', {cat: cat_array})
})

app.get("/mittens", function(request, response){
    var cat_array = [
        {name: "Mittens", food: "Pizza", age: "1", sleep1: "Couch", sleep2: "Floor"}
    ];
    response.render('details', {cat: cat_array})
})

app.get("/buttons", function(request, response){
    var cat_array = [
        {name: "Button", food: "Poop", age: "3", sleep1: "Feet", sleep2: "Counters"}
    ];
    response.render('details', {cat: cat_array})
})

app.get("/cars", function(request, response){
    response.render('cars');
})

app.get("/cars/new", function(request, response){
    response.render('newcar');
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})