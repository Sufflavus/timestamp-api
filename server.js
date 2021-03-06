var express = require('express');
var moment = require('moment');

var path = process.cwd();
var TimestampHandler = require('./timestamp-handler');

var app = express();
var timestampHandler = new TimestampHandler(moment);

app.get('/', function (req, res) {
  res.sendFile(path + '/public/index.html');
});

app.get('/favicon.ico', function (req, res) {
});

app.get('/:timestamp', timestampHandler.getTime);

var port = process.env.PORT || 1024;

app.listen(port, function() {
  console.log('Listening on ' + port);
});