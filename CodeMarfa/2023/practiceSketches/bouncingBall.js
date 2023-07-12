let xPos = 200;
let yPos = 200;

let xDir = 1;
let yDir = 1;

let xSpeed = 2;
let ySpeed = 2;

function setup() {
  createCanvas(400, 400);
  background(200)
}

function draw() {
  xPos = xPos + xSpeed * xDir;
  yPos = yPos + ySpeed * yDir;

  circle(xPos, yPos, 20);

  if (xPos > width) {
    xPos = width;
    xDir = xDir * -1;
    xSpeed = random(1, 3);
  }

  if (xPos < 0) {
    xPos = 0;
    xDir = xDir * -1;
    xSpeed = random(1, 3);
  }

  if (yPos > height) {
    yPos = height;
    yDir = yDir * -1;
    ySpeed = random(1, 3);
  }

  if (yPos < 0) {
    yPos = 0;
    yDir = yDir * -1;
    ySpeed = random(1, 3);
  }
}
