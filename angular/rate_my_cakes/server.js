var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var path = require("path")
var session = require("express-session")
var port = 8000;

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());
app.use(session({ secret: "boop" }));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, function () {
    console.log("Listening on localhost:8000");
});