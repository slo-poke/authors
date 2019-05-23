const mongoose = require('../config/authors.config');
// const Quotes = require('../../public/src/app/quotes.ts')

var AuthorSchema = new mongoose.Schema({
    name: String,
    quotes: [],
})

module.exports = mongoose.model('Author', AuthorSchema);