var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path');
app.use(express.static( __dirname + '/public/dist/public' ));

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public'));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Require Mongoose and Routes JS Files
require('./server/config/mongoose.js');
const routes = require('./server/config/routes.js');
routes(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});

