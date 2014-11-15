var five = require("johnny-five"), 
  board, sensor, fan;

board = new five.Board();

board.on("ready", function() {
  sensor = new five.Sensor({
    pin: "A0",
    freq: 500
  });
  // fan = new five.Motor(5);
  sensor.on("data", function(err, value){
    // convert raw reading to celcius
    var cel = ((value * 0.004882814) - 0.5) * 100;
    console.log("temperature in celcius: " + cel);
    /* 
    if (cel > 25) {
      fan.start();
    } else {
      fan.stop();
    } 
    */
  });
});