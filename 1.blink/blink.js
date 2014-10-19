var five = require("johnny-five"), board, led;

board = new five.Board();

board.on("ready", function() {
  led = new five.Led(5);
  led.strobe( 1000 );
  this.repl.inject({
    led: led
  });
  console.log("You can interact with the bargraph via the variable 'led'");
  console.log("e.g. led.stop();\n Hit control-D to exit.\n >> ");
});