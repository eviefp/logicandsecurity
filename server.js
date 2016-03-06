var express = require('express');
var app = express();
var jade = require('jade');
var glob = require('glob');

app.use(express.static('source/public'));

app.set('views', 'source/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    glob('./source/views/articles/*.jade', null, function(err, files) {
        res.render('index', { 
            test: { test:'abc'}, 
            articles: files, 
            renderTemplate: jade.renderFile,
            sidebar: true
        });        
    });
});

app.get('/nosidebar', function(req, res) {
    glob('./source/views/articles/*.jade', null, function(err, files) {
        res.render('index', { 
            test: { test:'abc'}, 
            articles: files, 
            renderTemplate: jade.renderFile,
            sidebar: false
        });        
    });
});

app.listen(3000, function() {
    console.log('Running on port 3000');
});