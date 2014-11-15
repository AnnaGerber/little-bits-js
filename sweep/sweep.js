var five = require("johnny-five"), 
  board, servo;

board = new five.Board();

board.on("ready", function() {

  var servo = new five.Motor(5);

  servo.start();

  this.repl.inject({
    servo: servo
  });
  
});