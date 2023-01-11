const express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('pages/index');
});
app.get('/index', function(req, res){
    res.render('pages/index');
})
app.get('/step1', function(req, res){
    res.render('pages/step1');
});
app.get('/step2', function(req, res){
    res.render('pages/step2');
});
app.get('/step3', function(req, res){
    res.render('pages/step3');
});
app.get('/step4', function(req, res){
    res.render('pages/step4');
});
app.get('/finish', function(req, res){
    res.render('pages/finish');
});

app.listen(8080);
console.log('Server is listening to port 8080');