var express = require('express');
var app = express();
var config = require('./config');
var cookieParser = require('cookie-parser');

app.use(cookieParser());

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(__dirname + '/public'));

require('./controllers').set(app);

app.listen(config.port, function () {
  console.log('Store app listening on port ' + config.port);
});
