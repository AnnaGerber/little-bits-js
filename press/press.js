var five = require("johnny-five"), 
  board, led, button,
  buttonCounter = 0;

board = new five.Board();

board.on("ready", function() {
  led = new five.Led(5);
  button = new five.Button(0);

  button.on("press", function(value){
    buttonCounter++;
    if (buttonCounter % 2 === 0) {
      led.off();
    } else {
      led.on();
    }
    console.log("button has been pressed " + buttonCounter + " times");
  });
});