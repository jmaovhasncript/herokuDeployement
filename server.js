var express = require('express');
var app = express();
var path = require('path');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');


// make express look in the public directory for assets (css/js/img)
app.set('views', path.join( __dirname + '/public/view'));
console.log(__dirname);
// set the home page route
app.get('/', function(req, res) {
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});