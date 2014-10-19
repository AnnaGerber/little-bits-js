var five = require("johnny-five"), 
  board, led, dimmer;

board = new five.Board();

board.on("ready", function() {
  led = new five.Led(5);
  dimmer = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  dimmer.on("change", function() {
    console.log("dimmer reading " + this.raw);
    // as dimmer value increases, the pulse duration will approach 0
    led.pulse(1023 - this.raw);
  });
});