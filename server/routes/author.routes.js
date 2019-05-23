module.exports = function(app) {
    const authors = require('../controllers/authors.controller');
    
    app.get('/api/authors', function(req, res) {
        authors.showAll(req, res);
    })

    app.get('/api/authors/:id', function(req, res) {
        authors.showOne(req, res);
    })

    app.post('/api/authors', function(req, res) {
        authors.addNew(req, res);
    })

    app.put('/api/authors/:id', function(req, res) {
        authors.edit(req, res);
    })

    app.delete('/api/authors/:id', function(req, res) {
        authors.delete(req, res);
    })

    app.get('/api/quotes/:id', function(req, res) {
        authors.getQuotes(req, res);
    })

    app.put('/api/quotes/:id', function(req, res) {
        authors.deleteQuote(req, res);
    })
}