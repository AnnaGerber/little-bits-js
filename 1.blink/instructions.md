## Blink

Blink an LED

### Bits you'll need

1 x [Arduino](http://littlebits.cc/bits/arduino), 1 x [power](http://littlebits.cc/bits/littlebits-power), 1 x [bargraph](http://littlebits.cc/bits/bargraph)

![image](../images/arduino.jpg)
![image](../images/power.jpg)
![image](../images/bargraph.jpg)

### Circuit

Connect power bit to d0 on Arduino bit, d5 on Arduino bit to bargraph bit.

### Code

    var five = require("johnny-five"), board, led;

    board = new five.Board();

    board.on("ready", function() {
      led = new five.Led(5);
      led.strobe( 1000 );
      this.repl.inject({
        led: led
      });
      console.log("You can interact with the bargraph via the variable 'led'");
      console.log("e.g. led.stop();\n Hit control-d to exit.\n >> ");
    });

You can find a copy of this code in [1.blink/blink.js](./blink.js)

### What you'll see

All of the LEDs in the bargraph will blink on and off together, once per second (1000 milliseconds).

### Going further

Johnny-Five provides a REPL (Read-Eval-Print Loop) where you can type in commands to take effect immediately. From the REPL prompt try the following commands:

    led.stop()    // stop blinking or pulsing
    led.off()     // turn led off
    led.on()      // turn led on
    led.pulse()   // pulse the led
    led.fadeIn()  // fade to full brightness
    led.fadeOut() // fade to off

Hit control plus d on a new line in the REPL to exit and terminate the program.