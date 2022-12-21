// Import basic modules
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


// App setup
var app = express();
var serverPort = 8080;
var httpServer = require('http').Server(app);

// view engine setup
// app.set('views', path.join(__dirname, 'server/views/pages'));
// app.set('view engine', 'ejs');

// Setup public directory
app.use(express.static(path.join(__dirname, 'public')));

var htmlPath = path.join(__dirname, 'server/views/pages');
app.use(express.static(htmlPath));


// Import Controllers
// var indexController = require('./server/controllers/index');

// Views
// app.get('/', )

module.exports = app;
app.set('port', serverPort);

var server = httpServer.listen(app.get('port'), function (){
    console.log('http server running on port ' + server.address().port);
});