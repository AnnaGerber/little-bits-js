## Pulse

Use a dimmer to create an LED pulsing effect



### Bits you'll need

1 x [Arduino](http://littlebits.cc/bits/arduino), 1 x [power](http://littlebits.cc/bits/littlebits-power), 1 x [dimmer](http://littlebits.cc/bits/dimmer), 1 x [bargraph](http://littlebits.cc/bits/bargraph)

![image](../images/arduino.jpg)
![image](../images/power.jpg)
![image](../images/dimmer.jpg)
![image](../images/bargraph.jpg)

### Circuit

Connect power bit to dimmer bit, dimmer bit to a0 on Arduino bit, d5 on Arduino bit to bargraph bit. Switch the output mode for d5 to PWM.

### Code

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

You can find a copy of this code in [3.pulse/pulse.js](./pulse.js)

### What you'll see

As you turn the dimmer clockwise, the speed at which the LEDs in the bargraph pulse will increase. The raw value read from the dimmer will be printed to the console.

## Going further

We've inverted the reading from the dimmer by subtracting the raw value from 1023 (the maximum possible value) so that the pulse speed will increase as we turn the dimmer clockwise.  Experiment with changing the formula for calculating the pulse duration to change this behaviour and the speed of the pulses.
