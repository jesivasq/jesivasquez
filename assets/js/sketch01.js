let xSpeed = 5;
let ySpeed = 7;
let x = 0;
let y = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  ellipse(x, y, 25, 25);
  x += xSpeed;
  y += ySpeed;
  if (x === 0 || x > width) {
    xSpeed = -xSpeed;
  }
  if (y <= 0 || y >= height) {
    ySpeed = -ySpeed;
  }
}
