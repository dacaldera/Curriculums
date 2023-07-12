function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);

  stroke(0);
  strokeWeight(10);
  rectMode(CORNER);
  fill(255, 0, 0);
  square(100, 100, 200);

  rectMode(CENTER);
  fill(255, 200, 0);
  noStroke();
  square(100, 100, 100);
  square(100, 300, 100);
  square(300, 300, 100);
  square(300, 100, 100);
}
