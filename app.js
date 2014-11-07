var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + '/style.css');
});

io.on('connection', function(socket) {
    io.emit('userConnection', 'A new user connected.');

    socket.on('message', function(message) {
        io.emit('message', message);
    });

    socket.on('disconnect', function(){
        io.emit('userConnection', 'A user disconnected.');
    });
});

http.listen(3000, function() {
    console.log('Listening on port 3000...');
});