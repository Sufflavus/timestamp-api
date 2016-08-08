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

/*var port = 54828;
app.listen(port);

app.listen(port, function () {
  console.log(`Timestamp app listening on port ${port}!`);
});*/
var port = process.env.PORT || 1024;

app.listen(port, function() {
  console.log('Listening on ' + port);
});

/*var http=require('http');

var server=http.createServer(function(req,res){
    res.end('test');
});

server.on('listening',function(){
    console.log('ok, server is running');
});

server.listen(80);*/