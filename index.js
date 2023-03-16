var express = require('express');
var expressHbs  = require('express-handlebars');

var app = express();
app.listen(8080,()=>{
    console.log("Sever đang chạy !!!");
});

app.engine('.hbs', expressHbs());
app.set('view engine', '.hbs');

app.get('/hbs', function(req, res){
    res.render('index');
});





