// var animate = window.requestAnimationFrame ||
//   window.webkitRequestAnimationFrame ||
//   window.mozRequestAnimationFrame ||
//   function(callback) { window.setTimeout(callback, 1000/60) };
//
//
// var canvas = document.getElementById("#canvas");
// var width = 600;
// var height = 400;
// var ctx = canvas.getContext("2d");
// var paintCanvas = function() {
//   ctx.fillStyle = "black";
//   ctx.fillrect(0, 0, width, height);
// };
//
//
// paintCanvas();



var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60)
  };

var canvas = document.createElement('canvas');
var width = 600;
var height = 400;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');
var ball = new Ball(250, 250);
var paddleOne = new Paddle(0, 150, 8, 80);

window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};


var step = function() {
  update();
  draw();
  animate(step);
};

var update = function() {
};

var draw = function() {
  context.fillStyle = "#000";
  context.fillRect(0, 0, width, height);
  ball.draw();
  paddleOne.draw();
};

function Ball(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.xVel = 0;
  this.yVel = 0;
};

Ball.prototype.draw = function () {
  context.arc(this.xPos, this.yPos, 7, 2 * Math.PI, false)
  context.fillStyle = "#fff";
  context.fill();
};

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
