const quotes = require('./../controllers/quotes');
module.exports = function(app) {
    // Root Route
    app.get('/', quotes.root);

    // Add Quote Route
    app.post('/quotes', quotes.create);

    // Get All Quotes Route
    app.get('/quotes', quotes.index);

    // Update Quote Route
    app.post('/quotes/like/:id', quotes.update);

    // Destroy Quote Route
    app.post('/quotes/destroy/:id', quotes.destroy);




};