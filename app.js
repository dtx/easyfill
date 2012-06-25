
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', function(req, res){
    res.render('index', {title: 'Easyfill', theme:0});
});
app.get('/anime', function(req, res){
    res.render('index', {title: 'Easyfill', theme:1});
});
app.get('/teddy', function(req, res){
    res.render('index', {title: 'Easyfill', theme:2});
});
app.get('/soldier', function(req, res){
    res.render('index', {title: 'Easyfill', theme:3});
});
app.get('/parrot', function(req, res){
    res.render('index', {title: 'Easyfill', theme:4});
});

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
