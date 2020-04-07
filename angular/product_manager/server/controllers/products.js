const mongoose = require('mongoose');
var Cake = require('../models/product');

function handler(res){
    return function (err, result){
        if(err){
            res.json({
                message: "Error",
                error: err
            });
        } else {
            res.json({
                message: "Success",
                data: result
            });
        }
    }
}

module.exports = {
    index: function (req, res){
        Product.find({}, handler(res));
    },

    create: function(req, res){
        Product.create(req.body, handler(res))
    },

    rate: function(req, res){
        Product.findById(req.params.id, function(err, cake){
            if(err){
                res.json({message: "Error", error: err});
            } else {
                product.rating.push(req.body);
                product.save(handler(res));
            }
        });
    },

    show: function(req, res){
        Product.findById(req.params.id, handler(res))
    }
}
