var five = require("johnny-five"),
  board, sensor, sensor2;

board = new five.Board();

board.on("ready", function() {
  
  sensor = new five.Sensor({
    pin: "A0",
    freq: 250
  });
  sensor.on("data", function() {
    console.log("sensor reading " + this.raw);
  });

  /* Uncomment code below to add a second sensor on pin A1 */
  /*
  sensor2 = new five.Sensor({
    pin: "A1",
    freq: 1000
  });
  sensor2.on("change", function() {
    console.log("sensor2 reading changed:" + this.raw);
  });
  */
});