## Brightness

Use a dimmer to control LED brightness

### Bits you'll need

 * 1 x [Arduino](http://littlebits.cc/bits/arduino)
 * 1 x [power](http://littlebits.cc/bits/littlebits-power)
 * 1 x [dimmer](http://littlebits.cc/bits/dimmer)
 * 1 x [bargraph](http://littlebits.cc/bits/bargraph)

![image](../images/arduino.jpg)
![image](../images/power.jpg)
![image](../images/dimmer.jpg)
![image](../images/bargraph.jpg)

If you don't have a bargraph, use an alternative LED bit instead e.g. [LED](http://littlebits.cc/bits/led), [Long LED](http://littlebits.cc/bits/long-led) or [Bright LED](http://littlebits.cc/bits/bright-led).

### Assembling the circuit

Connect power bit to dimmer bit, dimmer bit to a0 on Arduino bit, d5 on Arduino bit to bargraph bit. Switch the output mode for d5 on the Arduino to PWM using the onboard switch next to the connector.

![image](../images/pulse_twist.jpg)

### Code

```javascript
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
    // raw value read will be between 0 and 1023
    console.log("dimmer reading " + this.raw);
    // brightness expects a value up to 255, so divide by 4
    led.brightness(Math.floor(this.raw / 4));
  });

});
```
You can find a copy of this code in [2.brightness/brightness.js](./brightness.js)

Run the code from the terminal e.g.

    node 2.brightness/brightness.js

### What you'll see

This project uses Pulse Width Modulation (PWM) to control the LED brightness using a value read from an analog input (the dimmer). All of the LEDs in the bargraph will increase or decrease in brightness in response to twisting the dimmer. You'll see the raw value read from the dimmer printed to the console whenever it changes.

### What to try

Try switching d5 to analog mode instead of PWM. Now, as the strengh of the signal to the bargraph increases, more LEDs in the bargraph will turn on. 