var five = require("johnny-five"),
  board, led, dimmer;

board = new five.Board();

board.on("ready", function() {
  
  led = new five.Led(5);

  dimmer = new five.Sensor({
    pin: "A0",
    freq: 250
  });
  
  led.on();

  dimmer.on("change", function() {
    // reading will be between 0 and 1023
    console.log("dimmer reading " + this.raw);
    // brightness expects a value up to 255, so divide by 4
    led.brightness(Math.floor(this.raw / 4));
  });

});