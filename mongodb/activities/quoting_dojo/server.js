const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Setting Static Requirements
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

// Setting our Views Requirements
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Require Mongoose adn Routes JS files
require('./server/config/mongoose.js');
const routes = require('./server/config/routes.js');
routes(app);


// Setting our Server to Listen on Port: 8000
app.listen(8000, () => {
    console.log("listening on port 8000");
});