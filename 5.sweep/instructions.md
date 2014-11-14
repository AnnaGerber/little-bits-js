## Sweep

Sweep a servo

### Bits you'll need

* 1 x [Arduino](http://littlebits.cc/bits/arduino)
* 1 x [power](http://littlebits.cc/bits/littlebits-power)
* 1 x [servo](http://littlebits.cc/bits/servo)

![image](../images/arduino.jpg)
![image](../images/power.jpg)
![image](../images/servo.jpg)


### Assembling the circuit

Connect power bit to d0 on Arduino bit, d5 on Arduino bit to servo bit. Flick the switch next to d5 to _pwm_ and the switch on the servo module to _swing_.

![image](../images/sweep.jpg)

### Code

    var five = require("johnny-five"), 
      board, servo;

    board = new five.Board();

    board.on("ready", function() {

      var servo = new five.Motor(5);

      servo.start();

      this.repl.inject({
        servo: servo
      });
      
    });

You can find a copy of this code in [5.turn/turn.js](./turn.js)

Run the code from the terminal e.g.

    node 5.sweet/sweep.js

### What you'll see

The servo will sweep back and forth between its minimum (0 degrees) and maximum (145 degrees) positions.

Note: normally we'd use the Servo class to control servos with Johnny-Five, however the LittleBits servo module responds more like a DC motor when it is in swing mode, hence we are using the Motor class.

When the servo is in swing mode, a high input signal (5V) will start it sweeping, and low (0) will stop it sweeping. The Motor class implements this as the `start()` and `stop()` methods.


### What to try

Use the REPL to turn the servo on or off:

    servo.start() // start servo sweeping
    servo.stop()  // stop servo sweeping
    servo.isOn    // property indicates whether it is moving

You can also control the speed of the sweeps:

    servo.speed(50)  // slow
    servo.speed(120) // mid-speed
    servo.speed(255) // fast
