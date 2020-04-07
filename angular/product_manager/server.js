var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var path = require("path")
var port = 8000;

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function () {
    console.log("Listening on localhost:8000");
});