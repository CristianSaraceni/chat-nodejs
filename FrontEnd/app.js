var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname + '/public'));
var mustacheExpress = require('mustache-express');
app.engine('html', mustacheExpress());
app.set('view engine', 'html' );
app.set('views', __dirname + '/views');


app.get('/', function(req, res){  
    res.render("index.html");
});


var port = Number(process.env.PORT || 3000);

app.listen(port, function(){
    console.log(port);
});