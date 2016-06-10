# _Ping Pong_

#### _A counting application that will replace certain numbers with specific words, 6/10/2016_

#### View this website on my [github pages][1]
[1]: http://jmdelight.github.io/pingpong/ "Ping Pong Counter"

#### By _**Joel Delight**_

## Description

_This will take a number as an input and then count up to that number from 1 replacing numbers divisible by 3 with "ping", numbers divisible by 5 with "pong" and numbers divisible by both with "pingpong"_

## Setup/Installation Requirements

* _Clone the repository_

## BDD specs used for ping pong counter

* _it can count up to the provided number: 2 - [1,2]_
* _it replaces numbers divisible by 3 with ping: 3 - [1,2,'ping']_
* _it replaces numbers divisible by 5 with pong: 5 - [1,2,'ping',4,'pong']_
* _if a number is divisible by both 3 and 5 it outputs pingpong: 15 [1,2,'ping',4,'pong','ping',7,8,'ping','pong',11,'ping',13,14,'pingpong']_
* _if you input a negative number, it will count down to it: -5 - [-1,-2,'ping',-4,'pong']_
* _non-number inputs: Bob - error message before submission_


## Programming steps for Pong

* _Draw a canvas_
* _Draw a ball_
* _Draw the paddles_
* _Move the Ball_
* _Reflect te ball off of edge of canvas_
* _Capture key press to move paddles_
* _Ball respwans in middle if it touches the sides with paddles_
* _Ball reflects off of paddles_
* _Implement a score counter_
* _Implement a computer AI that tracks the paddle to the ball position_

## Known Bugs

_There are no known issues with this page_

## Support and contact details

_If you have any questions or concerns, please email me at thefencingflutist@gmail.com_

## Technologies Used

_html, css, bootstrap, javascript, and jquery were used_

### License

Copyright (c) 2016 **_Joel Delight_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
