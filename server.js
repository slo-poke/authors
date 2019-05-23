const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public/dist/public'));
const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// const path = require('path');

// app.all("*", (req, res, next) => {
//     res.sendFile(path.resolve("./public/dist/public/index.html"));
// });

require('./server/routes/author.routes')(app);

app.listen(8000, function() {
    console.log("Listening on port 8000...");
})

// Good reference for using mongoose with angular:
// https://medium.com/@BaaniLeen/connecting-angular-5-app-to-mongodb-database-mean-stack-9b4b4232e219