var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/QD_DB');

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var CatSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2 },
    favorite_color: {type: String, required: true, minlength: 2}
    }, {timestamps: true})
mongoose.model('cat', CatSchema); 
var Cat = mongoose.model('cat');   

app.get('/', function(req, res) {
    cat = Cat.find({}, function(err, cat) {
        res.render('index', {cat:cat});
    })
})
app.get('/cats/new', function(req, res) {
    res.render('new');
})

app.post('/add', function(req, res) {
  console.log("POST DATA", req.body);
  var cat = new Cat({name: req.body.name, favorite_color: req.body.favorite_color});
  cat.save(function(err) {
    if(err) {
      console.log('something went wrong');
      console.log(cat.errors);
      res.redirect('/')
    } 
    else {
      console.log('successfully added a cat!');
      res.redirect('/');
    }
  })
})

app.get('/cats/edit/:id', function(req, res) {
    cat = Cat.findOne({_id: req.params.id}, function(err, cat) {
        console.log(cat);
        res.render('edit', {cat:cat});
    })
})
app.post('/change/:id', function(req, res) {
    console.log("POST DATA", req.body);
    Cat.update({_id: req.params.id},
                    {name: req.body.name,
                    favorite_color: req.body.favorite_color},
                    function(err){
                        if(err) {
                            console.log('something went wrong');
                            console.log(cat.errors);
                            res.redirect(`/cats/edit/${req.params.id}`)
                        } 
                        else {
                            console.log('successfully changed a cat!');
                            res.redirect(`/cats/${req.params.id}`);
                        }

    })
})
app.post('/delete/:id', function(req,res){
    Cat.remove({_id: req.params.id}, function(err){
        console.log("RECORD DELETED");
        res.redirect('/');
    })
})
app.get('/cats/:id', function(req, res) {
    cat = Cat.findOne({_id: req.params.id}, function(err, cat) {
        console.log(cat);
        res.render('cats', {cat:cat});
    })
});

  // Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});