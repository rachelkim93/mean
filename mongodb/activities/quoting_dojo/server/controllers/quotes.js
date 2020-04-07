const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');
module.exports = {

    root: (req, res) => {
        res.render('index', {errors: undefined});
    },

    index: (req, res) => {
        Quote.find({}, null, {sort: '-likes'}, (err, quotes) => {
            if(err){
                console.log(err);
            } else {
                res.render('quotes', {all_quotes:quotes});
            }
        });
    },

    create: (req, res) => {
        let quote = new Quote({name: req.body.name, quote: req.body.quote});
        quote.save()
        .then((success)=> {
            res.redirect('/quotes');
        })
        .catch((err)=> {
            console.log(err);
            res.render('index', {errors: err.errors.name.message});
        });
    },
    
    show: (req, res) => {

    },



    update: (req, res) => {
        console.log(req.params);
        Quote.findByIdAndUpdate({_id: req.params.id}, {$inc:{'likes':1}}, (err, quote) => {
            console.log(`the error is ${err}`);
            console.log(`the quote is ${quote}`);
            res.redirect('/quotes');
        });
    },



    destroy: (req, res) => {
        Quote.findOneAndRemove({_id: req.params.id}, (err) => {
            console.log(`the error is ${err}`);
            res.redirect('/quotes');
        });
    },




}