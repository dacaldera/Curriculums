let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  noFill();
  circle(x,y, 100);
  x = x + (mouseX - x)/30
  y = y + (mouseY - y)/30
}


