const Author = require('../models/author.model');

module.exports = {
    showAll: function(req, res) {
        Author.find({}, function(err, data) {
            if(err) {
                console.log('An error has occured', err);
            } else {
                res.json(data);
            }
        })
    },

    showOne: function(req, res) {
        Author.findById({ '_id': req.params.id }, function(err, data) {
            if(err) {
                console.log('An error has occured', err);
            } else {
                res.json(data);
            }
        })
    },

    addNew: function(req, res) {
        Author.create({ name: req.body.name }, function(err, data) {
            if(err) {
                console.log('An error has occured', err);
            } else {
                res.json(data);
            }
        })
    },

    edit: function(req, res) {
        Author.findByIdAndUpdate({  _id: req.params.id }, req.body, function(err, data) {
            if(err) {
                console.log('An error has occured', err);
            } else {
                res.json(data);
            }
        })
    },

    delete: function(req, res) {
        Author.findByIdAndDelete({ _id: req.params.id }, function(err, data) {
            if(err) {
                console.log('An error has occured', err);
            } else {
                console.log('An author has been deleted!');
                res.json(data);
            }
        })
    }
}