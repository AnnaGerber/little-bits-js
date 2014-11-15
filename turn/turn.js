var five = require("johnny-five"), 
  board;

board = new five.Board();

board.on("ready", function() {
  this.pinMode(5,five.Pin.PWM);
  this.analogWrite(5, 0); // move to min
  this.repl.inject({
    board: board
  });

});