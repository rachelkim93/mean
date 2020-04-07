var products = require('../controllers/products');

module.exports = function(app){
    app.get('/', products.index);
    
    app.get('/products/', products.show);

    app.post('/products/new', products.create);

    app.post('/products/edit/:id', products.edit)
}