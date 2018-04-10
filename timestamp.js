// basic required imports for NodeJS
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// Creat an instance of express for our app and instantiate bodyParser and cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/dateValues', function(req, res, next){
//GET call to return JSON that formats natural and unix date
    
});






app.listen(3000, function (){
    console.log('it is working');
});