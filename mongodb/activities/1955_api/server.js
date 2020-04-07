var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/1955_api');

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true}
}, {timestamps: true});
mongoose.model('User', UserSchema);
var User = mongoose.model('User')

mongoose.Promise = global.Promise;

app.get('/', function(req,res){
    User.find({}, function(err, users){
        if(err){
            console.log("Can't retrieve data", err);
            res.json({message: "error", error: err});
        }else{
            console.log("Data received.");
            res.json({message: "Success", data: users});
        }
    });
});

app.get('/new/:name', function(req,res){
    var user = new User({name: req.params.name});
    user.save(function(err){
        if(err){
            console.log("Something went wrong.");
            res.json({message: "Error", error:err});
        }else{
            console.log("User successfully added.")
            res.redirect('/')
        }
    })
})

app.get('/remove/:name', function(req,res){
    User.findOneAndRemove({name: req.params.name}, function(err){
        if(err){
            console.log("Something went wrong.");
            res,json({message: "error", error:err})
        }else{
            console.log("User has been removed.")
            res.redirect('/')
        }
    })
})

app.get('/:name', function(req, res){
    User.findOne({name: req.params.name}, function(err, data){
        if(err){
            console.log("Something went wrong.")
            res.json({message: "error", error:err})
        }else{
            console.log("User details.")
            res.json({data: data})
        }
    })
})

app.listen(8000, function(){
    console.log("Listening on port 8000.")
})