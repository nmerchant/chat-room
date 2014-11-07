var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res) {
    res.send('This will be a chat room.');
});

http.listen(3000, function() {
    console.log('Listening on port 3000...');
});