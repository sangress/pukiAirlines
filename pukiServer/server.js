const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 3000;

app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(port, function(){
  console.log('listening on *:', port);
});
