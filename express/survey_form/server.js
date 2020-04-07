// Load dependencies
var express = require("express");
var session = require('express-session');
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'starkey'}));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
    if (!req.session.counter){
        req.session.counter = 1;
    }
    else {
        req.session.counter +=1;
    }
 res.render("index");
});

app.post('/process', function(req, res) {
    
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;
 
 res.render("results", {counter: req.session.counter, name: req.session.name, location: req.session.location, language: req.session.language, comment: req.session.comment});
});

app.listen(8000, function() {
 console.log("listening on port 8000");
});