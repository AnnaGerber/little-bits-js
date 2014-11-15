var five = require("johnny-five"), 
  board, motor;

board = new five.Board();

board.on("ready", function() {

  motor = new five.Motor(5);

  motor.start();

  board.wait(5000, function() {
      motor.stop();
  });

  this.repl.inject({
    motor: motor
  });
});