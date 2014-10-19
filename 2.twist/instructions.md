## Twist

Use a dimmer to control LED bargraph

### Bits you'll need

1 x [Arduino](http://littlebits.cc/bits/arduino), 1 x [power](http://littlebits.cc/bits/littlebits-power), 1 x [dimmer](http://littlebits.cc/bits/dimmer), 1 x [bargraph](http://littlebits.cc/bits/bargraph)

![image](../images/arduino.jpg)
![image](../images/power.jpg)
![image](../images/dimmer.jpg)
![image](../images/bargraph.jpg)

### Circuit

Connect power bit to dimmer bit, dimmer bit to a0 on Arduino bit, d5 on Arduino bit to bargraph bit. Switch the output mode for d5 on the Arduino to PWM using the onboard switch next to the connector.

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
      
      led.on();

      dimmer.on("change", function() {
        // reading will be between 0 and 1023
        console.log("dimmer reading " + this.raw);
        // brightness expects a value up to 255, so divide by 4
        led.brightness(Math.floor(this.raw / 4));
      });

    });

You can find a copy of this code in 2.twist/twist.js

### What you'll see

This project uses Pulse Width Modulation (PWM) to control the LED brightness using a value read from an analog input (the dimmer). All of the LEDs will increase or decrease in brightness in response to twisting the dimmer. You'll see the raw value read from the dimmer printed to the console whenever it changes.

### Going further

Try switching d5 to analog mode instead of PWM. Now, as the strengh of the signal to the bargraph increases, more LEDs in the bargraph will turn on. 