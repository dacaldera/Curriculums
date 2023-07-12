let xPos = 200;
let yPos = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // background(220)

  xPos = xPos + random(-10, 10);

  yPos = yPos + random(-10, 10);

  noStroke();
  fill(random(255), random(255), random(255));
  circle(xPos, yPos, 10);
}
