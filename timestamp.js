// basic required imports for NodeJS
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// Creat an instance of express for our app and instantiate bodyParser and cors
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Open your main page
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//GET call to return JSON that formats natural and unix date
app.get('/:dateVal', function(req, res){
//Gets the request data for date
    var dateVal = req.params.dateVal;
// option for formatting date in natural date view
    var dateFormattingOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    if(isNaN(dateVal)){
        var naturalDate = new Date(dateVal);
        naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
        var unixDate = new Date(dateVal).getTime()/1000;
    }
    else {
        var unixDate = dateVal;
        var naturalDate = new Date(dateVal * 1000);
        naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
    }
    res.json({
        unix: unixDate, 
        natural: naturalDate
    });
});

var listener = app.listen(process.env.PORT, function(err, res) {
  if(err) throw err;
  console.log("Listening on Port: " + listener.address().port);
});