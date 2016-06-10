var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60)
  };

var canvas = document.createElement('canvas');
var width = 900;
var height = 500;
var paddleWidth = 8;
var paddleHeight = 80;
var ballRadius = 7;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');
var ball = new Ball(250, 250);
var paddleOne = new Paddle(0, height/3, paddleWidth, paddleHeight);
var paddleTwo = new Paddle(width - paddleWidth, height/3,paddleWidth, paddleHeight);

var step = function() {
  update();
  draw();
  animate(step);
};

var update = function() {
  ball.update();
};

var draw = function() {
  context.fillStyle = "#000";
  context.fillRect(0, 0, width, height);
  context.strokeStyle = "#fff";
  context.strokeRect(width/2, 0, 1, height);
  context.strokeRect(paddleWidth, 0, width - 2 * paddleWidth, height);
  paddleOne.draw();
  paddleTwo.draw();
  ball.draw();
};

function Ball(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.xVel = 3;
  this.yVel = 6;
  this.radius = ballRadius;
};


Ball.prototype.draw = function () {
  context.beginPath();
  context.arc(this.xPos, this.yPos, this.radius, 2 * Math.PI, false);
  context.fillStyle = "#fff";
  context.fill();
};

Ball.prototype.update =function() {
  this.xPos += this.xVel;
  this.yPos += this.yVel;
  if (this.xPos + this.radius>= width) {
    this.xVel *= -1;
  } else if (this.xPos - this.radius<= 0) {
    this.xVel *= -1;
  }
  if (this.yPos + this.radius>= height) {
    this.yVel *= -1;
  } else if (this.yPos - this.radius<= 0) {
    this.yVel *= -1;
  }
}

function Paddle(xPos, yPos, width, height) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.width = width;
  this.height = height;
  this.xVel = 0;
  this.yVel = 0;
};

Paddle.prototype.draw = function () {
  context.fillStyle = "#fff";
  context.fillRect(this.xPos, this.yPos, this.width, this.height);
};

Paddle.prototype.update = function () {
  this.xPos += this.xVel;
  this.yPos += this.yVel;
};

// PlayerOne.controls = function() {
//   for (var key in keysDown) {
//     var value = Number(key);
//     if (value == 37) {
//         this.paddle.yVel = -5;
//     } else if (value == 39) {
//         this.paddle.yVel = 5;
//     } else {
//         this.paddle.yVel = 0;
//     }
//   };
// };

window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};

window.addEventListener("keydown", function(event) {
  keysDown[event.keyCode] = true;
  console.log(keysDown);
});

window.addEventListener("keyup", function (event) {
    delete keysDown[event.keyCode];
});
