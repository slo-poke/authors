const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authors');
mongoose.Promise = global.Promise;

module.exports = mongoose;