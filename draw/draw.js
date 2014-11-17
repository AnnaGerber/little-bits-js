var five = require("johnny-five"), 
  http = require('http'),
  io = require('socket.io'),
  io = require('socket.io'),
  fs = require('fs'),
  board, joystick, button,
  html, server;

board = new five.Board();

board.on("ready", function() {

  // create a "joystick" using the dimmers on A1 and A0
  joystick = new five.Joystick({
    pins: ["A1", "A0"],
    freq: 100
  });

  button = new five.Button(0);

  // load our draw.html page from file
  html = fs.readFileSync('draw.html').toString();

  // create web server 
  server = http.createServer(function (req, res) { 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
  });

  io.listen(server).on('connection', function (socket) {
    
    // send the X, Y values to the client
    joystick.on("axismove", function(err, timestamp) {
      console.log(this.fixed.x, this.fixed.y);
      socket.emit('drawing', this.fixed);
    });

    button.on("press", function(value){
      socket.emit('clear');
    });
  });
  
  // run web server on http://localhost:3000
  server.listen(3000);
});