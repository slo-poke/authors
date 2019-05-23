const mongoose = require('../config/authors.config');

var AuthorSchema = new mongoose.Schema({
    name: String,
})

module.exports = mongoose.model('Author', AuthorSchema);